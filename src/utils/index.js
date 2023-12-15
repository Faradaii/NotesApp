import Swal from 'sweetalert2';
import warn from '../assets/warn.png'

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const showDeleteModal = async () => {
  let isConfirmed = false;
  return Swal.fire({
    title: "Yakin menghapus note ini?",
    imageUrl: warn,
    showCancelButton: true,
    confirmButtonColor: "#FF6359",
    cancelButtonColor: "#00C8AC",
    confirmButtonText: "Hapus Aja!",
    cancelButtonText: "Ngga jadi deh",
    reverseButtons: true
  })
  .then((result) => {
    if (result.isConfirmed) {
      isConfirmed = true;
    }
    return isConfirmed;
  })
}

export { showFormattedDate, showDeleteModal };
