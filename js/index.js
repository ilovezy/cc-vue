/*
 * @Author: fhc
 * @Date:   2015-11-19 15:41:40
 * @Last Modified by:   fhc
 * @Last Modified time: 2015-11-19 15:48:35
 */

'use strict';

new Vue({
    el: '#app',
    data: {
        message: 'hello vue'
    }
});

new Vue({
    el: '#list',
    data: {
        todos: [{
            text: 'hello cc'
        }, {
            text: 'hello zy'
        }, {
            text: 'hello qq'
        }, {
            text: 'hello mh'
        }, ]
    }
});

new Vue({
    el: '#handleUserInput',
    data: {
        message: 'hello handle user input'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

new Vue({
    el: '#todo',
    data: {
        newTodo: '',
        todos: [{
            text: 'add some todos'
        }]
    },
    methods: {
        addTodo: function() {
            var text = this.newTodo.trim();

            if(text) {
                this.todos.push({
                    text: text
                })
                this.newTodo = ''
            }
        },

        removeTodo: function(index) {
            this.todos.splice(index, 1)
        }
    }
});
