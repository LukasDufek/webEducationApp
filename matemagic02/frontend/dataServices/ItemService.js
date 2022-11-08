import axios from "axios";

const url = 'api/items/';


class ItemService{
    //get items
    static getItems(){

        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(item => ({
                        ...item,
                        name: item.name,
                        type: item.type,
                        using: item.using,
                        value: item.value,
                        img_address:item.img_address,
                        price: item.price,
                        sell_price:item.sell_price


                    }))
                )
            }catch (err){
                reject(err);
            }
        });
    }

    //create items
    static insertItem(text){
        return axios.post(url, {
            text
        });
    }


    //delete items
    static deleteItem(id){
        return axios.delete(`${url}${id}`);
    }



}

export default ItemService;
