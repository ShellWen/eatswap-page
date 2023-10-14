import { motion, MotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const fixedProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const smoothProgress = useSpring(fixedProgress, {
    // 我需要一些快速的动画
    stiffness: 100,
    damping: 20,
  }) as MotionValue<number>
  const topPlaceholder = useTransform(smoothProgress, [0, 1], ['50vh', '0vh'])
  const minHeight = useTransform(smoothProgress, [0, 1], ['40vh', '100vh'])
  const bioTranslateX = useTransform(smoothProgress, [0, 1], ['0vw', '-100vw'])
  const contentOpacity = useTransform(smoothProgress, [0.3, 1], [0, 1])
  return (
    <main className="relative h-[200vh] overflow-clip bg-primary-200" ref={ref}>
      <div className="sticky top-0 min-h-screen">
        <motion.div style={{
          height: topPlaceholder,
        }} />
        <motion.div
          className="bg-secondary-600 text-primary-200"
          style={{
            minHeight,
          }}
        >
          <div className="mx-8 md:mx-16 lg:mx-24 my-8 py-4">
            <div className="pt-4 md:pb-6 sticky top-0 bg-secondary-600 z-10">
              <span className="block text-6xl font-extrabold md:inline md:text-8xl">交换龙</span>
              <span className="mt-2 block text-4xl font-bold md:ml-4 md:mt-0 md:inline md:text-7xl">Eatswap</span>
            </div>
            <div className="relative">
              <motion.div
                className="text-2xl md:leading-relaxed"
                style={{
                  translateX: bioTranslateX,
                }}
              >
                一只特立独行的龙
                <br />
                这里是假文
                <br />
                这里也是，反正刚好凑三行就可以了！
              </motion.div>
              <motion.div
                className=""
                style={{
                  opacity: contentOpacity,
                }}
              >
                <div className="flex h-[16rem] flex-col justify-center rounded-lg bg-white/10 p-8">这里是 Blog 文章列表 👀</div>
                <div className="mt-4 flex h-[16rem] flex-col justify-center rounded-lg bg-white/10 p-8">这里是我也不知道是啥 👀</div>
                <div className="mt-4 flex h-[4rem] flex-col justify-center rounded-lg bg-white/10 p-8">这里是页脚 👀</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default App
