 
 var str = "Hello world!";
        var count = 0;
        function countBs(string) {
            var count = 0;
            for (var i = 0; i < string.length; i++) {
                if (string.charAt(i) == "o") {
                    count++
                }
            }
            return count;
        }
        alert(countBs(str));
        function countChar(string, ch) {
            var count = 0;
            for (var i = 0; i < string.length; i++) {
                if (string.charAt(i) == ch) {
                    count++
                }
            }
            return count;
        }
        alert(countChar(str, "l"));