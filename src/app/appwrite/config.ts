
import conf from "@/app/conf/config";
import { Client, Account, ID,OAuthProvider } from "appwrite";

type CreateUserAccount = {
    email: string;
    password: string;
    firstname: string;
    phone: string;
    lastname:string; 
    confirmpassword:string;
};

type LoginUserAccount = {
    email: string;
    password: string;
};

const appwriteClient = new Client();
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
    async createUserAccount({ email, password, firstname, lastname, phone ,confirmpassword }: CreateUserAccount) {
         try {
         const userAccount = await account.create(ID.unique(), email, password, firstname);
        
            if (!userAccount) {
                throw new Error('Failed to create user account');
            }
            // Optionally store phone number in a database or handle other logic
            // account.deleteSession('current');
            return this.login({ email, password });
        } catch (error: any) {
            console.error('Error creating user account:', error);
            throw error; // Rethrow error for higher-level handling
        }
    }

    async login({ email, password }: LoginUserAccount) {
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error: any) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error) {
            console.error('Error checking login status:', error);
            return false;
        }
    }

    async getCurrentUser() {
        try {
            return account.get();
        } catch (error) {
            console.error("getCurrentUser error:", error);
            throw error;
        }
        return null;
    }

    async logout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.error("logout error:", error);
        }
    }
}
export const checkActiveSession = async () => {
    try {
      const session = await account.getSession('current'); 
      return session !== null; 
    } catch (error:any) {

      if (error.code === 401) {
        return false;
      }
      throw error; 
    }
  };
export const deleteSessions = async () => {
    try {
      // Get the list of all sessions
      const sessions = await account.listSessions();
  
      // Delete each session
      await Promise.all(
        sessions.sessions.map(async (session) => {
          await account.deleteSession(session.$id);
        })
      );
  
      console.log('All sessions deleted successfully');
    } catch (error) {
      console.error('Error deleting sessions:', error);
      throw error; // Re-throw the error for further handling
    }
  };
//   account.createOAuth2Session(
//     OAuthProvider.Google, // provider
//    // scopes (optional)
// );
export { OAuthProvider }

const appwriteService = new AppwriteService();
export default appwriteService;
