const HostPath = "http://localhost:5050";

export const PostFunc = (path, data) => {
  path = HostPath + path;
  return fetch(path, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const GetAPIFunc = (path) => {
  path = HostPath + path;
  return fetch(path).then((response) => response.json());
};

export const DeleteDataFunc = (path) => {
  path = HostPath + path
  return fetch(path, {
      method: "DELETE"
  }).then(response => response.json())
}