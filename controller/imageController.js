const { default: axios } = require('axios');
const imgUrl = process.env.IMAGEURL;

class ImageController {
    static async Upload(req, res) {
        try {
            const { body } = req;
            const result = await axios({
                url: `${imgUrl}/upload`,
                method: 'POST',
                data: body,
            });
            return res.status(200).json({
                message: 'Uplaod Success',
                data: result.data.data
            });
        } catch (error) {
            res.status(400).json({
                message: 'Upload Failed',
                error: error.message
            });
        }
    }
};

module.exports = ImageController;