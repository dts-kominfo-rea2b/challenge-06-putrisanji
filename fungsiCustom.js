// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
    file1 = val;
};
let modifyFile2 = (val) => {
    file2 = val;
};
let modifyFile3 = (val) => {
    file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const formatData = (data) => {
    if (data.message) {
        result = data.message.split(" ");
        return result[result.length - 1];
    } else if (data[0]?.message) {
        result = data[0].message.split(" ");
        return result[result.length - 1];
    } else if (data[0]?.data?.message) {
        result = data[0].data.message.split(" ");
        return result[result.length - 1];
    }
};
const bacaData = (fnCallback) => {
    const hasil = [];
    fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
        if (err) {
            fnCallback(err);
            return;
        }
        hasil.push(formatData(JSON.parse(data)));
        fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
            if (err) {
                fnCallback(err);
                return;
            }
            hasil.push(formatData(JSON.parse(data)));
            fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
                if (err) {
                    fnCallback(err);
                    return;
                }
                hasil.push(formatData(JSON.parse(data)));
                fnCallback(null, hasil);
            });
        });
    });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
    modifyFile1,
    modifyFile2,
    modifyFile3,
    bacaData,
};
