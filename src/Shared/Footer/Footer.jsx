

const Footer = () => {
    return (
        <footer className="footer w-11/12 mx-auto text-base-content ">
  <div>
  <div className="flex gap-5 items-center">
  <img className="w-16 rotate-45 me-4" src="./jigsaw.png" alt="" />
  <p className="text-3xl font-mono font-semibold"><span className="text-red-500">Toy</span><span className="text-sky-400">Land</span></p>
  </div>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;