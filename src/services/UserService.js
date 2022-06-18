class UserService {
    _apiUsers = 'https://api.escuelajs.co/api/v1/users';
    _apiIsAvailable = 'https://api.escuelajs.co/api/v1/users/is-available';
  
    getResource = async (url) => {
      let res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Cold not fetch ${url}, status: ${res.status}`)
      }
  
      return await res.json();
    } 
  
    getAllUsers = () => {
      return this.getResource(`${this._apiUsers}`);
    }

    postData = async (data = {}, url = this._apiIsAvailable) => {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }
  }
  
  export default UserService;