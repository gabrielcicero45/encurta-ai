import axios from "axios";
const LINK_KEY = '@seuLink'
export const  linkService = {
   
    async getLinks() {
      return  axios.get('http://localhost:8080/links')
      .then(async (response) =>{
        console.log(response)
        this.save(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    async saveLink({long_url,link,user}){
        try {
            const response = await axios.post('http://localhost:8080/links', {
                long_url: long_url,
                link: link,
                user: user
            });
        } catch (error) {
            console.log(error);
        }
    },
    save(list){
        localStorage.setItem(LINK_KEY,list)
        sessionStorage.setItem(LINK_KEY,list)
    },

    get(){
        return localStorage.getItem(LINK_KEY)
    },
    delete(){
        localStorage.removeItem(LINK_KEY)
        sessionStorage.removeItem(LINK_KEY)
    },
}