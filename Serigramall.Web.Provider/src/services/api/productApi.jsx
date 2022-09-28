import  ApiCore  from './utilities/core';
const url = 'Product';
const plural = 'Products';
const single = 'Product';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiTasks = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  remove: true,
  url: url,
  plural: plural,
  single: single
});
/*
apiTasks.massUpdate = () => {
  // Add custom api call logic here
    return null
}*/

export default apiTasks;