/*
 * Copyright 2019, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    "vue",
    "vue-require/websocket/withSock",
    "json!/kiosk/server/views/config",
    "text!./app.html"
], function(Vue, withSock, conf, template) {
    "use strict";

    return Vue.component("App", {
        template: template,

        components: {
        },

        created: function() {
            // no networking here, only supplying ws options 
            withSock(null, {
                url: conf.wsUrl
                // other possible options are forwarded to wsClient
                // https://wilton-iot.github.io/wilton/docs/html/namespaceweb__wsClient.html#a9a7f2f55ba84b066190bb357f45a7d36
            });
        },

        methods: {
            top: function() {
                window.scrollTo(0, 0);
            }
        }
    });
});