/**
 * Created by Lenovo on 2017/2/14.
 */
var album = (function () {
    function fixWrongSize() {
        var imgThree = document.getElementsByClassName('album-3')[0];
        var imgFive = document.getElementsByClassName('album-5')[0];

        var width = imgThree.dataset.width;
        var height = imgThree.dataset.height;

        var img = imgThree.children;
        var halfHeight = height / 2;
        img[1].style.width = halfHeight + 'px';
        img[0].style.width = width - halfHeight + 'px';
        img[1].style.left = width - halfHeight + "px";
        img[2].style.width = halfHeight + "px";
        img[2].style.left = width - halfHeight + "px";

        width = imgFive.dataset.width;
        height = imgFive.dataset.height;
        var threeHeight = width / 3;

        img = imgFive.children;
        img[1].style.height = threeHeight + "px";
        img[4].style.height = height - threeHeight + "px";
        img[4].style.top = threeHeight + "px";
    }

    return {
        init: function () {
            var nodes = document.querySelectorAll("[class^='album']");
            // for(var i = 0; i < nodes.length; i++){
            //     nodes[i].width = nodes[i].data.width;
            //     nodes[i].height = nodes[i].data.height;
            // }

            Array.prototype.forEach.call(nodes, function (node) {

                var width = node.dataset.width;
                var height = node.dataset.height;

                node.style.width = width + 'px';
                node.style.height = height + 'px';
            });

            fixWrongSize();

        },

        set: function (id, options) {
            options = options || {};

            var node = document.getElementById(id);
            node.className += ' album-' + options.num;


            var width = options.width;
            var height = options.height;

            node.style.width = width + 'px';
            node.style.height = height + 'px';

            fixWrongSize();
        }
    }
})();

album.init();