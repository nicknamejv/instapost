// Post model
class Post {
    constructor(data) {
        this.user = data.user;
        this.image = data.image;
        this.content = data.content; 
        this.isPrivate = data.isPrivate;
        this.id = this.#generateId();
    }
  
    /*
     * @description This is a private method that returns an unique id
     * @param {number} len
     * @returns string
     */
  
    #generateId(len = 10) {
      const characters = "qwertyuio1p2a3s4d5f6g7h8j9k0lzxcvbnm";
      let uid = "";
  
      for (let count = 0; count < len; count++) {
        const character = Math.floor(Math.random() * characters.length);
        uid += characters[character];
      }
  
      return uid;
    }
  }







// Collection class
class Collection {
    #Model;
    #items;
    constructor(model, startingData) {
      this.#Model = model;
      this.#items = startingData.map(item => new this.#Model(item));
    }
  
    /*
     * @description Will return an array with all items availible in this.items
     * @returns array
     */
  
    find() {
      return this.#items;
    }
  
    /*
     * @description Will return item match with the itemId
     * @param { string } itemId
     * @param { function } callBack Will return error or item
     * @returns function;
     */
    findById(itemId, callBack) {
      if (!itemId) return console.log("missing id in first argument");
  
      if (typeof callBack !== "function") {
        return console.log("missing function in second argument");
      }
  
      const item = this.#items.find(({ id }) => id === itemId);
      let error;
  
      if (!item) {
        error = { message: `item can't be found` };
      }
  
      return callBack(error, item);
    }
  
  
    /**
     * @param {object} data
     * @param { function } callBack Will return error or item
     * @returns function;
     */
     create(data, callBack) {
      if (!data) return console.log("missing data in first argument");
  
      if (typeof callBack !== "function") {
        return console.log("missing function in second argument");
      }
  
      let error, newItem;
  
      const isEmpty = Object.keys(data).every(field => data[field] === "");
  
      if (isEmpty) {
        error = { message: `you have empty fields` };
      } else {
        newItem = new this.#Model(data);
  
        this.#items.push(newItem);
      }
  
      return callBack(error, newItem);
    }
  
    /*
     * @param {string} itemId
     * @param {object} data
     * @param { function } callBack Will return error or item
     * @returns function;
     */
  
     findByIdAndUpdate( itemId, data, callBack ) {
      let error = null;
      const item = this.#items.find(({ id }) => id === itemId);
  
      if (!item) {
        error = { message: `item can't be found` };
      }
  
      for (const key in item) {
        if (key === 'id') continue;
  
        item[key] = data[key];
      }
  
      return callBack(error, item);
    }
  
    /*
     * @param {string} itemId
     * @param { function } callBack Will return error or item
     * @returns function;
     */
  
  findByIdAndDelete( itemId, callBack ) {
    let error = null;
    const item = this.#items.find((item, idx ) => { 
        let foundItem;
        if (item.id === itemId) {
            /* remove one element */
            foundItem = this.#items.splice(idx, 1);
         }
  
         return foundItem;
     });
  
      if (!item) {
        error = { message: `item can't be found` };
      }
  
      return callBack(error, item);
    }
  }




module.exports = new Collection (Post, [{
    
	user: {
		username: "Super Cool Coder Person",
		avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stockio.com%2Ffree-icon%2Fbatman-2&psig=AOvVaw3KpdVYIalE_tAiJ4WXohlQ&ust=1626993635386000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDcj-Gd9fECFQAAAAAdAAAAABAD",
	},
	image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbatman.fandom.com%2Fwiki%2FBatman&psig=AOvVaw0XNAp93zGR3JpFnqaUDA2I&ust=1626993632025000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIi90Oid9fECFQAAAAAdAAAAABAD",
	content: "Doing some code and chill with Damian",
	isPrivate: false,
}]);