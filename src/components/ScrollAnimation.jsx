import {motion, useScroll} from 'framer-motion'

const ScrollAnimation = () => {
  const {scrollYProgress} = useScroll();
  
  return (
    <>
    {/* Penggunaan style pada scaleX karena scale-x di tailwind hanya menerima nilai dalam persen dan nilai statis, sedangkan framer menggunakan nilai dinamis */}
      <motion.div style={{scaleX:scrollYProgress}} className={`h-2 fixed top-0 right-0 left-0 bg-blue-500 transform origin-top-left`}>
      </motion.div>
      <div className='p-20'>
        <h2 className='text-3xl font-semibold mb-6'>Coba scroll ke bawah, lihat efek scrollnya</h2>
        <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ea quis sapiente, consectetur a excepturi velit consequatur doloribus autem laboriosam rem ipsum cupiditate voluptatum, quod aspernatur. Numquam sunt magnam, odit ducimus hic quidem, perferendis voluptatem quisquam explicabo assumenda incidunt repudiandae deserunt pariatur adipisci blanditiis enim corrupti id quo quis ea veniam? Distinctio possimus reiciendis, blanditiis consectetur libero, assumenda aliquid debitis, obcaecati voluptas nesciunt eligendi reprehenderit consequuntur quos explicabo cum nobis nihil magnam quam neque quae. In modi fugit perferendis hic a pariatur, numquam inventore accusamus exercitationem, ab animi eos temporibus fuga odio, nam fugiat delectus. Dolorum non eius laboriosam labore vel quod omnis, quam vitae unde, fugiat culpa voluptate pariatur totam odit facere deleniti illum itaque et eos tempora harum a, ut repudiandae aspernatur? Blanditiis, incidunt iste quia consectetur id reprehenderit recusandae repellendus? Cum voluptatibus illum, sapiente necessitatibus repellat magnam porro esse vero, maxime tenetur qui recusandae deserunt assumenda at praesentium iusto similique ea iure! Debitis perspiciatis in dolores eveniet totam quas amet ducimus reiciendis, fugiat, similique hic ipsa libero culpa cumque nam excepturi sed, itaque sint. Aspernatur aperiam praesentium sunt harum numquam ipsa dolorem atque minus assumenda! Tempora cumque, corporis suscipit magnam tenetur animi dolore! Tenetur ea recusandae molestiae quasi ipsum cum modi aut saepe, quam hic illo necessitatibus tempora doloribus esse repellat aliquid iure sit numquam quas ratione dolorem maiores. Vel voluptas aperiam natus et quasi quibusdam harum sapiente aut fugit? Possimus tempora, sit iusto amet assumenda consectetur error doloremque, nulla eum illum temporibus laboriosam impedit, veritatis ipsam vel. Ipsa laborum iste adipisci natus obcaecati illo optio sapiente ratione rerum dolorem! Et voluptatem recusandae facilis sequi rerum, est quibusdam laudantium, assumenda impedit excepturi ipsam. Fugit voluptates, rerum repellendus doloribus, veniam inventore quae facere perspiciatis eos sit provident magni omnis accusantium. Praesentium porro, odit magnam recusandae amet inventore nobis?</p>
      </div>
    </>
  )
}

export default ScrollAnimation