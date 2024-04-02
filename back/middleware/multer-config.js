const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'images');
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(' ').join('_');
//     const extension = MIME_TYPES[file.mimetype];
//     callback(null, name + Date.now() + '.' + extension);
//   }
// });
// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//       callback(null, 'images');
//     },
//     filename: (req, file, callback) => {
//       const name = file.originalname.split(' ').join('_').split('.')[0]; // Récupérer le nom du fichier sans l'extension

//       const extension = MIME_TYPES[file.mimetype];
//       callback(null, name + '_' + Date.now() + '.' + extension); // Ajout d'un underscore (_) entre le nom et le timestamp
//     }
//   });
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'images');
    },
    filename: (req, file, callback) => {
      // Normalisation Unicode pour convertir les caractères accentués en caractères non accentués
      const cleanedFileName = file.originalname.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
      // Nettoyage du nom de fichier
      const cleanedFileNameWithoutSpecialChars = cleanedFileName.replace(/[., -]/g, '_');
  
      // Récupération de l'extension de fichier à partir du type MIME
      const extension = MIME_TYPES[file.mimetype];
      if (!extension) {
        return callback(new Error('Type de fichier non pris en charge'));
      }
  
      
      // Génération du nom de fichier avec l'extension
      callback(null, cleanedFileNameWithoutSpecialChars + '_' + Date.now() + '.' + extension);
    }
  });
module.exports = multer({storage: storage}).single('image');