 var str = 0;
        function min(str1, str2) {
            str1 < str ? str = str1 : str = str2;
            return str;
        }
        console.log(min(5, 3));
        console.log(min(0, 10));
        console.log(min(0, -10));
        console.log(min(-5, -10));