const Navbar: React.FC = () => {

     return (
          <nav className="w-screen fixed flex justify-between items-center top-0 right-0 left-0 px-6 py-3 bg-light-gray text-base font-montserrat">
               <a className="ml-10" href="#home">
                    AVA
               </a>
     
               <div className="flex space-x-8 mr-10 cursor-pointer">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
               </div>
          </nav>
     );
     };
     
     export default Navbar;
     