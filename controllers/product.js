module.exports = async (app) => {

    app.get('/api/test', (req, res) => {
        console.log('API Hit');
        res.send('Hellow World');
    });

}