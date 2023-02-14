import axios from 'axios';
//import store from "@/store/store";
//import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    // isLoggedIn: function (state) {
    //     if (state.token != '') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {

    // Login Action
    async login({
                    commit
                }, user) {
        commit('auth_request');

        try {
            let res = await axios.post('/api/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
                //localStorage.removeItem('user');
                localStorage.setItem('user', JSON.stringify(user));
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    // Register User
    async register({commit}, userData) {
        try {
            commit('register_request');
            let res = await axios.post('/api/users/register', userData);
            if (res.data !== undefined) {
                commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err)
        }
    },
    // Get the user Profile
    async getProfile({
                         commit
                     }) {
        commit('profile_request');
        let res = await axios.get('/api/users/profile');
        commit('user_profile', res.data.user);
        return res;
    },
    // Logout the user
     logout({
                     commit
                 }) {
         localStorage.removeItem('token');
         localStorage.removeItem('test_examples');
         localStorage.removeItem('test_word_tasks');
        //await localStorage.removeItem('user');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];

        return
    }
};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    },

    //
    async addItem(state, item) {
        state.user.inventory.push(item);
        localStorage.setItem('user', JSON.stringify(state.user));


        let id = state.user._id;

        await axios({
            method: 'put',
            url: `api/users/${id}`,
            data: state.user

        });

    },


    async removeItem(state, item) {

        if (state.user.inventory.length > -1) {
          state.user.inventory  = state.user.inventory.filter(object => {
                return object.name !== item.name;
            });


            localStorage.setItem('user', JSON.stringify(state.user));
            let id = state.user._id;

            await axios({
                method: 'put',
                url: `api/users/${id}`,
                data: state.user.inventory

            });
        }


    },

    async addMoney(state, count) {
        state.user.money += count;
        localStorage.setItem('user', JSON.stringify(state.user));

        let id = state.user._id;

        await axios({
            method: 'put',
            url: `api/users/${id}`,
            data: state.user

        });
    },

    async increaseExcercies(state){
        state.user.total_count_of_excercies++;
        localStorage.setItem('user', JSON.stringify(state.user));

        let id = state.user._id;

        await axios({
            method: 'put',
            url: `api/users/${id}`,
            data: state.user

        });

    },



    async setSuccessRate(state, rate){
        state.user.success_rate = rate;
        localStorage.setItem('user', JSON.stringify(state.user));

        let id = state.user._id;

        await axios({
            method: 'put',
            url: `api/users/${id}`,
            data: state.user

        });
    },



    async upgradeAbillity(state, ability) {


        switch (ability) {
            case 'strength':
                state.user.abilities.strength++;
                break;
            case 'attack':
                state.user.abilities.attack++;
                break;
            case 'defense':
                state.user.abilities.defense++;
                break;
            case 'hp':
                state.user.abilities.hp++;
                break;
        }
        localStorage.setItem('user', JSON.stringify(state.user));

        let id = state.user._id;

        await axios({
            method: 'put',
            url: `api/users/${id}`,
            data: state.user

        });
    },

    async next_grade(state){

        if(parseInt(state.user.year) < 5){
            state.user.year =''+parseInt(state.user.year)+1;
            state.user.total_count_of_excercies = 0;
            state.user.success_rate = 0;
        }

        localStorage.setItem('user', JSON.stringify(state.user));

        let id = state.user._id;

        await axios({
            method: 'put',
            url: `api/users/${id}`,
            data: state.user

        });
    },

    async defeat_enemy(state, enemy) {

        if (!state.user.defeated_oponents.includes(enemy)) {
            state.user.defeated_oponents.push(enemy);
            localStorage.setItem('user', JSON.stringify(state.user));

            let id = state.user._id;

            await axios({
                method: 'put',
                url: `api/users/${id}`,
                data: state.user

            });

        }
    }


};

export default {
    state,
    actions,
    mutations,
    getters
};
