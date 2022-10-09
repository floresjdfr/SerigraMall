const url = 'Product';
const plural = 'Products';
const single = 'Product';
import { ApiCore } from "./utilities/core";

// plural and single may be used for message logic if needed in the ApiCore class.

const apiTasks = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: url,
  plural: plural,
  single: single
});

apiTasks.massUpdate = () => {
  // Add custom api call logic here
    return null
}

export default apiTasks;