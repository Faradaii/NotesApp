import Swal from 'sweetalert2';
import deletewarn from '../assets/deletewarn.svg'
import { localization } from './localization';

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const showDeleteModal = async (locale) => {
  let isConfirmed = false;
  return Swal.fire({
    title: localization[locale].showdeletemodal.title,
    imageUrl: deletewarn,
    imageWidth: 300,
    imageHeight: 300,
    showCancelButton: true,
    confirmButtonColor: "#FF6359",
    cancelButtonColor: "#00C8AC",
    confirmButtonText: localization[locale].showdeletemodal.acceptbtn,
    cancelButtonText: localization[locale].showdeletemodal.declinebtn,
    reverseButtons: true,
    customClass: {
      popup: "dark:bg-dark-2 bg-white",
      title: "dark:text-white text-black"
    }
  })
  .then((result) => {
    if (result.isConfirmed) {
      isConfirmed = true;
    }
    return isConfirmed;
  })
}

export { showFormattedDate, showDeleteModal };
