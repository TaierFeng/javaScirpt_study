        //流量转化： int => XX.xx[B|Y|Z|E|T|G|M|K]bps
        function formatFlow(value) {
            //单位列表
            var unitList = ["Kbps","Mbps","Gbps","Tbps","Ebps","Zbps","Ybps","Bbps"];

            var i = 1;
            //设置进制数
            var item = 1024;
            //返回结果
            var result = value + unitList[0];
            //循环
            while (value > item) {
                value = value / item;
                result = (value % item).toFixed(2) + unitList[i];
                i++;
            }
            return result;
        }