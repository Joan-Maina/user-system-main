import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcompleteprojects } from "../redux/actions/projects";

function Complete() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcompleteprojects());
  });

  return <div>completed</div>;
}

export default Complete;
