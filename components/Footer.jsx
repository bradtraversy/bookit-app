const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class='py-6'>
      <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <p class='text-center text-sm text-gray-600'>
          &copy; {currentYear} Bookit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
