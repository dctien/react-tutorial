import { v4 as uuidv4 } from 'uuid';
// create a random with UUID 
let items =  [
  {
    id: uuidv4(),
    name: "abc zxc",
    level: 0 // 0 Small, 1 Medium , 2 High
  },
  {
    id: uuidv4(),
    name: "tiến đặng công tiến",
    level: 1 // 0 Small, 1 Medium , 2 High
  },
  {
    id: uuidv4(),
    name: "Chi vũ thị khánh chi",
    level: 1 // 0 Small, 1 Medium , 2 High
  },
  {
    id: uuidv4(),
    name: "Cô gái của những nỗi buồn Khánh Chi ",
    level: 2 // 0 Small, 1 Medium , 2 High
  }
];

export default items;