"use client";

interface ViewUserButton {
    userId:number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('Info selanjutnya bisa dilihat di website KAI');
    } else {
      alert('Info selanjutnya bisa dilihat di website KAI');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Info selanjutnya</button>
    </>
  );
};

export default ViewUserButton;