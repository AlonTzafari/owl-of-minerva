console.log('hello world');
import app from './app';
const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});