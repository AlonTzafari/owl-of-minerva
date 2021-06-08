import app from './app';

console.log(`environment: ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {    
    console.log(`server listening on port ${PORT}`);
});