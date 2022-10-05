const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = (props) => (
  <div className="d-flex justify-content-center align-items-center h-100" >
    <div className={`spinner text-${props.align !== undefined ? props.align : "center"}`}>
      <img src={loadingImg} alt="Loading..." width={props.width} />
    </div>
  </div>

);

export default Loading;
