import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  Award, 
  FileText, 
  LayoutGrid, 
  List as ListIcon,
  ChevronRight,
  Target,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Database,
  Share2
} from 'lucide-react';

// --- DATA MẪU DỰA TRÊN YÊU CẦU ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Bài tập 1 - Bài 1: Máy tính và các thiết bị ngoại vi",
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100 text-blue-700",
    objective: "Hiểu rõ các bước thao tác với tệp tin và thư mục. ",
    summary: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows.",
    attachmentType: "PDF",
    link: "https://drive.google.com/file/d/1aBgfIPfFU_XtQUzvNdmy6q3amIA5iDyq/view?usp=sharing"
  },
  {
    id: 2,
    title: "Bài tập 2 - Bài 2: Khai thác dữ liệu và thông tin",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    color: "bg-emerald-100 text-emerald-700",
    objective: "Nắm bắt kỹ năng tìm kiếm, đánh giá và xử lý dữ liệu.",
    summary: "Sử dụng các toán tử tìm kiếm nâng cao để thu thập tài liệu. Sau đó, tiến hành lọc, đánh giá độ tin cậy của các nguồn tin và tổng hợp thành báo cáo.",
    attachmentType: "PDF",
    link: "https://drive.google.com/file/d/1jmVfbKHRGNi_AOc98r0zbC7fHwno_9XE/view?usp=sharing"
  },
  {
    id: 3,
    title: "Bài tập 2 - Bài 3: Tổng quan về trí tuệ nhân tạo",
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
    color: "bg-amber-100 text-amber-700",
    objective: "Làm quen với các khái niệm và ứng dụng cơ bản của AI.",
    summary: "Trải nghiệm thực tế với các công cụ AI tạo sinh. Khám phá cách viết câu lệnh (prompt) hiệu quả để hỗ trợ tìm kiếm ý tưởng và tóm tắt văn bản.",
    attachmentType: "PDF",
    link: "https://drive.google.com/file/d/1sHoeqolWjWgqHDsG_qwQQomc7saSXWlm/view?usp=sharing"
  },
  {
    id: 4,
    title: "Bài tập 3 - Bài 4: Giao tiếp và hợp tác trong môi trường số",
    icon: <Share2 className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-100 text-purple-700",
    objective: "Sử dụng các công cụ làm việc nhóm hiệu quả.",
    summary: "Thiết lập và phân công công việc qua nền tảng Google Workspace. Tổ chức họp trực tuyến và cùng biên tập tài liệu nhóm theo thời gian thực.",
    attachmentType: "PDF",
    link: "https://drive.google.com/file/d/1F909fk_2FWszwBD9dpUcq9O268ich2XP/view?usp=sharing"
  },
  {
    id: 5,
    title: "Bài tập 2 - Bài 5: Sáng tạo nội dung số",
    icon: <FileText className="w-6 h-6 text-pink-500" />,
    color: "bg-pink-100 text-pink-700",
    objective: "Tạo ra các sản phẩm truyền thông số cơ bản.",
    summary: "Lên ý tưởng, sử dụng công cụ thiết kế trực tuyến (như Canva) để tạo ra một sản phẩm truyền thông hoàn chỉnh, truyền tải thông điệp rõ ràng.",
    attachmentType: "PDF",
    link: "https://drive.google.com/file/d/19DmJARV5TNcNB2XgI1-k7S2ycId0ErCn/view?usp=sharing"
  },
  {
    id: 6,
    title: "Bài tập 4 - Bài 6: An toàn và liêm chính học thuật",
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    color: "bg-red-100 text-red-700",
    objective: "Bảo vệ thông tin cá nhân và trích dẫn tài liệu đúng chuẩn.",
    summary: "Nhận diện các rủi ro bảo mật trên không gian mạng. Thực hành trích dẫn tài liệu tham khảo đúng chuẩn APA để đảm bảo tính liêm chính trong học thuật.",
    attachmentType: "PDF",
    link: "https://drive.google.com/file/d/111r_4li8bVx3HMPTjZi-KdKLv-t0fqkJ/view?usp=sharing"
  }
];

// --- COMPONENTS ---

const AboutPage = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden shrink-0">
        <img 
          src="https://drive.google.com/thumbnail?id=1PjYPs3PcFsLKT6qvu3XouXZsHaZTCMPK&sz=w500"
          alt="Avatar Dương Đăng Tuấn" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Dương Đăng Tuấn</h1>
        <p className="text-emerald-600 font-medium text-lg mb-4">Sinh viên ngành Khoa Học Máy Tính</p>
        <p className="text-slate-600 leading-relaxed">
          Xin chào! Mình là một sinh viên đam mê công nghệ và sáng tạo. Sở thích của mình là đọc sách, lập trình và khám phá các công cụ kỹ thuật số mới.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
            <Target size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Mục tiêu & Định hướng</h2>
        </div>
        <ul className="space-y-3 text-slate-600">
          <li className="flex gap-2">
            <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />
            <span>Nắm vững các kỹ năng số cơ bản và nâng cao trong môi trường học thuật.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />
            <span>Phát triển tư duy phân tích dữ liệu và ứng dụng AI vào công việc.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />
            <span>Định hướng tương lai trở thành một [Chuyên viên/Kỹ sư/...] chuyên nghiệp.</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600">
            <Briefcase size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Mục đích Portfolio</h2>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">
          Website này được xây dựng với mục đích:
        </p>
        <ul className="space-y-3 text-slate-600">
          <li className="flex gap-2">
            <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Thể hiện các kỹ năng số đã học trong suốt khóa học.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Lưu trữ, hệ thống hóa sản phẩm cá nhân để dễ dàng truy cập và chia sẻ.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Nhìn lại quá trình phát triển bản thân.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800">Danh sách Bài tập</h2>
        <p className="text-slate-500 text-sm mt-1">Tập hợp và trình bày các bài tập đã hoàn thành</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${project.color} bg-opacity-20`}>
                  {project.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  Bài {project.id}
                </span>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">Mục tiêu:</span>
                  <p className="text-slate-500 line-clamp-2">{project.objective}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">Tóm tắt quá trình:</span>
                  <p className="text-slate-500 line-clamp-3">{project.summary}</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <FileText size={14} /> {project.attachmentType}
              </span>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
              >
                Xem sản phẩm <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SummaryPage = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 md:p-12 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tổng kết hành trình</h1>
        <p className="text-emerald-100 max-w-2xl text-lg">
          Nhìn lại quá trình học tập và xây dựng Portfolio này, mình đã nhận được rất nhiều giá trị và kinh nghiệm quý báu.
        </p>
      </div>
      {/* Decorative bg elements */}
      <div className="absolute -right-10 -top-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute right-20 -bottom-20 w-40 h-40 bg-teal-400 opacity-20 rounded-full blur-2xl"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
          <Lightbulb size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Kiến thức & Kỹ năng</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Qua môn học này, mình đã nắm vững cách ứng dụng đa dạng các công cụ kỹ thuật số vào thực tiễn. Đặc biệt là tư duy làm chủ công nghệ, sử dụng Trí tuệ nhân tạo (AI) an toàn và quản lý dữ liệu hiệu quả.
        </p>
        <ul className="text-sm space-y-2 text-slate-500">
          <li>• Khai thác, đánh giá và xử lý thông tin số.</li>
          <li>• Ứng dụng AI để tối ưu hóa hiệu suất làm việc.</li>
          <li>• Sáng tạo và quản lý nội dung truyền thông đa phương tiện.</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
          <Award size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Điểm tâm đắc nhất</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Điều mình tâm đắc nhất là hành trình tự tay tổng hợp và thiết kế trang Portfolio cá nhân này. Nó không chỉ giúp mình hệ thống hóa toàn bộ kiến thức môn học một cách trực quan, mà còn là một "bản CV số" thực tế để thể hiện năng lực với nhà tuyển dụng sau này.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
          <Target size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Thách thức & Khắc phục</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Khó khăn lớn nhất ban đầu là việc làm quen với các công cụ số mới và thao tác chắt lọc thông tin cho từng bài tập. Để khắc phục, mình đã chủ động tham khảo các video hướng dẫn trực tuyến, học hỏi cách bố cục từ các website chuyên nghiệp và kiên trì thực hành để có được thành quả cuối cùng.
        </p>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200">
      {/* HEADER & NAVIGATION */}
      <header className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <Briefcase size={20} />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">MyPortfolio</span>
            </div>
            
            <nav className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'about' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'}`}
              >
                Giới thiệu
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'projects' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'}`}
              >
                Dự án
              </button>
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'summary' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'}`}
              >
                Tổng kết
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'projects' && <ProjectsPage />}
        {activeTab === 'summary' && <SummaryPage />}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Portfolio Cá Nhân. Thực hiện phục vụ môn học Kỹ năng số.</p>
        </div>
      </footer>
    </div>
  );
}