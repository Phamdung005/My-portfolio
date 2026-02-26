import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './index.css'

function App() {
  return (
    <div className="bg-white text-slate-900 dark:bg-[#0a0f1a] dark:text-white transition-colors duration-500">
      <Navbar />

      {/* Hero Section - Giới thiệu Dũng IT Phenikaa */}
      <section id="about" className="min-h-screen pt-20 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8 animate-fadeIn">
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-[#135bec]">Dũng IT</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Sinh viên năm 3 khoa CNTT tại <strong>Phenikaa University</strong>. 
            Chuyên gia xây dựng hệ thống web với <strong>ReactJS, Node.js</strong> và làm chủ hạ tầng <strong>AWS</strong>.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#projects" className="px-10 py-4 bg-[#135bec] text-white rounded-full font-bold shadow-2xl shadow-blue-600/30 hover:scale-105 transition-all">
              Xem dự án tiêu biểu
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section - Dữ liệu thật từ quá trình học */}
      <section id="skills" className="min-h-screen pt-20 bg-gray-50/50 dark:bg-[#0d1321] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl font-bold text-center mb-16 underline decoration-[#135bec] underline-offset-8">Kỹ năng chuyên môn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 dark:border-white/10 p-8 rounded-2xl bg-white dark:bg-white/5 hover:border-[#135bec] transition-colors">
              <h3 className="text-[#135bec] text-xl font-bold mb-4">Frontend</h3>
              <p className="font-medium">ReactJS, Tailwind CSS, JavaScript (ES6+)</p>
            </div>
            <div className="border border-gray-200 dark:border-white/10 p-8 rounded-2xl bg-white dark:bg-white/5 hover:border-[#135bec] transition-colors">
              <h3 className="text-[#135bec] text-xl font-bold mb-4">Backend & Cloud</h3>
              <p className="font-medium">Node.js, AWS Services, Microservices Architecture</p>
            </div>
            <div className="border border-gray-200 dark:border-white/10 p-8 rounded-2xl bg-white dark:bg-white/5 hover:border-[#135bec] transition-colors">
              <h3 className="text-[#135bec] text-xl font-bold mb-4">Tools & Others</h3>
              <p className="font-medium">Docker, Git, C Programming, Laravel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Dự án thực tế của Dũng */}
      <section id="projects" className="min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl font-bold text-center mb-16">Dự án tâm huyết</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project: Lectgen AI */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 border border-white/10">
              <div className="p-8">
                <span className="text-xs font-bold text-[#135bec] uppercase tracking-widest">AI & Fullstack</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Lectgen AI</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Nền tảng tạo bài thuyết trình bằng AI. Vai trò: AI Vision Engineer & Full-stack Admin.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">AI Vision</span>
                </div>
              </div>
            </div>

            {/* Project: Real-time Auction */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 border border-white/10">
              <div className="p-8">
                <span className="text-xs font-bold text-[#135bec] uppercase tracking-widest">Microservices</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Auction System</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Website đấu giá trực tuyến thời gian thực dựa trên kiến trúc Microservices.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">Docker</span>
                </div>
              </div>
            </div>

            {/* Project: Medical Booking */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 border border-white/10">
              <div className="p-8">
                <span className="text-xs font-bold text-[#135bec] uppercase tracking-widest">Web Application</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Medical Booking</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Hệ thống đặt lịch khám bệnh trực tuyến sử dụng Laravel và MySQL.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">Laravel</span>
                  <span className="px-3 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 flex items-center justify-center bg-gray-50 dark:bg-[#0d1321]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl font-bold">Hãy cùng làm việc!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Tôi đang tìm kiếm cơ hội thực tập ReactJS để phát triển bản thân.</p>
          <a href="mailto:contact@example.com" className="inline-block px-12 py-5 bg-[#135bec] text-white rounded-full font-bold text-lg hover:shadow-blue-600/40 hover:shadow-2xl transition-all">
            Gửi Email cho tôi
          </a>
        </div>
      </section>
    </div>
  )
}

export default App