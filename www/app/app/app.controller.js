(function() {
    'use strict';

    angular.module('jsReportingApp').controller('AppCtrl', ['$http', '$scope', '$state', '$sce', AppCtrl]);

    function AppCtrl($http, $scope, $state, $sce) {
        console.log("TESTEEEEEEE: ", $state.params.projectId);
        var vm = this;

        $scope.chooseTab = 0;

        var javascript, html, json;

        /*
         * Função salvamento dos arquivos
         */
        vm.saveFiles = saveFiles;

        /*var javascript = ace.edit("javascript");
        javascript.setTheme("ace/theme/twilight");
        javascript.session.setMode("ace/mode/javascript");
        javascript.renderer.setScrollMargin(10, 10);
        javascript.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true
        });

        var json = ace.edit("json");
        json.setTheme("ace/theme/twilight");
        json.session.setMode("ace/mode/javascript");
        json.renderer.setScrollMargin(10, 10);
        json.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true
        });*/

        html = ace.edit("html");
        html.setTheme("ace/theme/twilight");
        html.session.setMode("ace/mode/html");
        html.renderer.setScrollMargin(10, 10);
        html.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true,
            maxLines: 50
        });

        var url = "../projects/" + $state.params.projectId + "/";

        /*$http.get(url + "helpers.js").then(function(data) {
            javascript.setValue(data.data);
            console.log("js", data);
        });

        $http.get(url + "data.json").then(function(data2) {
            console.log("json", data2);
            json.setValue(JSON.stringify(data2.data, null, '\t'));
        });*/

        $http.get(url + "page.html").then(function(data3) {
            console.log("html", data3);
            html.setValue(data3.data);
        });

        vm.clickTab = function(index) {
            $scope.chooseTab = index;

            if (index == 0) {
                if (!html) {
                    html = ace.edit("html");
                    html.setTheme("ace/theme/twilight");
                    html.session.setMode("ace/mode/html");
                    html.renderer.setScrollMargin(10, 10);
                    html.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "page.html").then(function(data3) {
                        console.log("html", data3);
                        html.setValue(data3.data);
                    });
                }
            } else if (index == 1) {
                if (!javascript) {
                    javascript = ace.edit("javascript");
                    javascript.setTheme("ace/theme/twilight");
                    javascript.session.setMode("ace/mode/javascript");
                    javascript.renderer.setScrollMargin(10, 10);
                    javascript.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "helpers.js").then(function(data) {
                        javascript.setValue(data.data);
                        console.log("js", data);
                    });
                }
            } else if (index == 2) {
                if (!json) {
                    json = ace.edit("json");
                    json.setTheme("ace/theme/twilight");
                    json.session.setMode("ace/mode/javascript");
                    json.renderer.setScrollMargin(10, 10);
                    json.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "data.json").then(function(data2) {
                        console.log("json", data2);
                        json.setValue(data2.data);
                    });
                }
            }
        };

        vm.executar = function() {
            console.log("EXECUTAR: ", $state.params.projectId);
            $http.get("http://localhost:8000/reporting/" + $state.params.projectId, { responseType: 'arraybuffer' }).then(function(data, status) {
                console.log("Data: ", data);
                console.log("\nStatus: ", status);
                var file = new Blob([data.data], { type: 'application/pdf' });
                console.log("file", file);
                var fileURL = URL.createObjectURL(file);
                $scope.pdf = $sce.trustAsResourceUrl(fileURL);
                //window.open($scope.pdf);
            });
        };

        function saveFiles() {
            console.log("TESTEEEEEEE");

            var sendFiles = {
                url: $state.params.projectId
            };

            if (html) {
                console.log("html: ", html.getValue());
                sendFiles.html = html.getValue();
            }
            if (javascript) {
                console.log("js: ", javascript.getValue());
                sendFiles.javascript = javascript.getValue();
            }
            if (json) {
                console.log("json: ", json.getValue());
                sendFiles.json = json.getValue();
            }

            $http.post("http://localhost:8000/save-files", sendFiles).then(function(result) {
                console.log("RESULTADO", result);
            });
        };
    }
})();