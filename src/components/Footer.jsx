const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-blue-ribbon-500 sm:text-center">
            © 2023 myPortefolio™ . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-blue-ribbon-500 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Education
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Skills
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Experiences
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
