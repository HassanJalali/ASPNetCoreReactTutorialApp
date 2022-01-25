const API_BASE_URL_DEVELOPMENT = 'https://localhost:44376';
const API_BASE_URL_PRODUCTION = 'https://appname.azurewebsites.net';

const ENDPOINTS = {
    Get_All_Posts : 'Post/GetAllPost',
    Get_Post_By_ID : 'Post/GetPostById',
    Delete_Post_By_ID : 'Post/CreatePost',
    Update_Post : 'Post/UpdatePost',
    Create_Post : 'Post/DeletePost'
}

const development = {
    API_URL_Get_All_Posts : `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.Get_All_Posts}`,

    API_URL_Get_Post_By_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.Get_Post_By_ID}`,

    API_URL_Delete_Post_By_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.Delete_Post_By_ID}`,

    API_URL_Update_Post: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.Update_Post}`,
    
    API_URL_Create_Post: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.Create_Post}`,   
}

const production = {
    API_URL_Get_All_Posts : `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.Get_All_Posts}`,

    API_URL_Get_Post_By_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.Get_Post_By_ID}`,

    API_URL_Delete_Post_By_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.Delete_Post_By_ID}`,

    API_URL_Update_Post: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.Update_Post}`,
    
    API_URL_Create_Post: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.Create_Post}`,   
}

const Constants = process.env.NODE_ENV === 'development' ? development : production;

export default Constants;