// <====================Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>
const fs = require("fs");

const readAndParseDataFromFile = () => {
  // read file
  const data = fs.readFileSync("./data/products.json");
  //   convert to javascript obj to operate on
  const products = JSON.parse(data);
  return products;
};

const writeDataInFile = (productObj) => {
  try {
    fs.writeFileSync("./data/products.json", JSON.stringify(productObj, "", 3));
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

//is function ko call karenge from controller file
//1)
//ek part complete hua reading data from a file and sending response to the user for getproduct
const getProductData = () => {
  const { productList } = readAndParseDataFromFile();
  return productList;
};


//dusra  part complete hua write data in postman and send it in your products.json file
const addProductsInData = (product) => {
  //read file and parse data
  const productObj = readAndParseDataFromFile();
  console.log("product from file", productObj);
  //add the product in the array
  // const updatedProductList = [...product.productList, prd]
  // product.productList = updatedProductList

  //yaha tak file me data object form me ha lakin hume json me write karna ha
  productObj.productList.push(product);
  // save the array in the file again
  return writeDataInFile(productObj);
};

//
const updateProductsInData = (id, updateData) => {
  const productObj = readAndParseDataFromFile();
  // const {productList:productArr } = productObj
  // const productIndex = productArr.findIndex((el) => el.id === Number(id));
  // if (productIndex !== -1) {
  //     productArr[productIndex] = { ...productArr[productIndex], ...updateData};
  // }
    //   productObj.productList = productArr;


    //same chhez kiya line 49 wale code ka
    //to update the object with updated Array
  const index = productObj.productList.findIndex((el) => el.id === Number(id));
  productObj.productList[index] = {
    ...productObj.productList[index],
    ...updateData,
  };
  return writeDataInFile(productObj);
};

module.exports = { getProductData, addProductsInData, updateProductsInData }

