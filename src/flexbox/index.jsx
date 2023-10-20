function Flexbox() {
  return (
    <div>
      <div class="flex align-items-center justify-content-start">
        <div class="inline-block w-4rem h-4rem bg-primary font-bold p-4 border-round mr-3">
          1
        </div>
        <div class="w-4rem h-4rem bg-primary font-bold flex align-items-center justify-content-center p-4 border-round mr-3">
          2
        </div>
        <div class="w-4rem h-4rem bg-primary font-bold flex align-items-center justify-content-center p-4 border-round">
          3
        </div>
      </div>
      <div class="inline-flex">
    <div class="hidden md:block bg-primary font-bold align-items-center justify-content-center p-4 border-round mr-3">Hide on a small screen</div>
    <div class="block  bg-primary font-bold align-items-center justify-content-center p-4 border-round mr-3">Visible on a small screen</div>
</div>
<div class="overflow-hidden">
    <div class="flex">
        <div class="flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        <div class="flex-3 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
    </div>
</div>
<i className="pi pi-check"></i>
<i className="pi pi-times"></i>
<span className="pi pi-search"></span>
<span className="pi pi-user"></span>
         
    </div>
  );
}
export default Flexbox;
