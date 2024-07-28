class LetterHelper {
    static getLetterType(letter) {
        console.log(letter);
        switch (letter) {
            case "general-letter":
                return "Surat Keterangan Umum";
            case "birth-letter":
                return "Surat Keterangan Kelahiran";
            case "death-letter":
                return "Surat Keterangan Kematian";
            case "name-change-letter":
                return "Surat Keterangan Perubahan Nama";
            case "heir-letter":
                return "Surat Keterangan Ahli Waris";
        }
    }
}

export default LetterHelper;
