const users = require("../json/data.json");

// 1) tentukan yang memiliki company berhuruf akhir E
const checkCompanyLastLetterE = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. kondisi jika index akhir dari company = E
        if (Array.from(data[i].company)[data[i].company.length - 1] === 'E') {
            // 4. masukkan data yang sesuai hasil check kondisi di atas
            result.push(data[i])
        }
    }

    return {
        data: result,
        totalData: result.length
    };
}

//deklarasi variable untuk mengambil return value dari function di atas
let data = checkCompanyLastLetterE(users).data;
let totalData = checkCompanyLastLetterE(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);