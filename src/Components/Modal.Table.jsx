import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ModalTable({ heading, text, onClick }) {
  Swal.fire({
    title: heading,
    text,
    icon: "question",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "YES",
    confirmButtonAriaLabel: "Yes",
    cancelButtonText: "NO",
    cancelButtonAriaLabel: "No",
  }).then((res) => {
    if (res.isConfirmed) {
      onClick();
    }
  });
}
