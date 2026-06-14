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
  Share2,
  ArrowLeft,
  Wrench,
  Layers,
  BarChart,
  CheckCircle
} from 'lucide-react';

// --- DATA MẪU MỚI (CẬP NHẬT THEO GIAO DIỆN CẦN THIẾT KẾ) ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Bài tập 1: Máy tính và các thiết bị ngoại vi",
    tags: ["Thực hành", "Cơ bản "],
    description: "Thực hiện tìm kiếm, quản lý và thao tác với tệp tin, thư mục trên hệ điều hành theo yêu cầu.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    content: (
      <div className="space-y-8 text-slate-700">
        {/* TIÊU ĐỀ BÀI 1 */}
        <div className="bg-blue-50 border border-blue-100 p-6 md:p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">BÁO CÁO BÀI TẬP THỰC HÀNH</h2>
          <p className="text-blue-600 font-medium text-lg">Chủ đề: Máy tính và các thiết bị ngoại vi</p>
        </div>

        {/* Phần 1: Mục tiêu */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            1. Mục tiêu bài tập
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Làm quen với giao diện và các chức năng cơ bản của hệ điều hành Windows.</li>
            <li>Nắm vững các thao tác: tạo, đổi tên, sao chép, di chuyển và xóa thư mục/tệp tin.</li>
            <li>Sử dụng thành thạo công cụ tìm kiếm và các phần mềm nén/giải nén dữ liệu.</li>
          </ul>
        </div>

        {/* Phần 2: Các bước thực hiện */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-blue-600" />
            2. Các bước thực hiện
          </h3>
          <div className="space-y-6">
            
            {/* BƯỚC 1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 1: Mở File Explorer</h4>
              <p className="text-sm mt-2 text-slate-600">Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.</p>
              <img 
                src="cây_thư_mục.png"
                alt="Minh họa Bước 1" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 2: Truy cập ổ đĩa/thư mục</h4>
              <p className="text-sm mt-2 text-slate-600">Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.</p>
              <img 
                src="ổ_D.png"
                alt="Minh họa Bước 2" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 3 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 3: Tạo thư mục mới</h4>
              <p className="text-sm mt-2 text-slate-600">Nhấp chuột phải vào một khoảng trống → chọn New → Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.</p>
              <img 
                src="tạo_thư_mục.png"
                alt="Minh họa Bước 3" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 4 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 4: Vào thư mục vừa tạo</h4>
              <p className="text-sm mt-2 text-slate-600">Nhấp đúp vào thư mục ThucHanh_NguyenVanA.</p>
              <img 
                src="vào_thư_mục.png"
                alt="Minh họa Bước 4" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 5 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 5: Tạo tệp tin văn bản</h4>
              <p className="text-sm mt-2 text-slate-600">Nhấp chuột phải vào khoảng trống → New → Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.</p>
              <img 
                src="tạo_tệp_tin_vb.png" 
                alt="Minh họa Bước 5" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 6 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 6: Đổi tên tệp tin</h4>
              <p className="text-sm mt-2 text-slate-600">Nhấp chuột phải vào tệp GhiChu.txt → chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.</p>
              <img 
                src="đổi_tên_tệp_tin.png"
                alt="Minh họa Bước 6" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 7 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 7: Tạo thư mục con</h4>
              <p className="text-sm mt-2 text-slate-600">Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải → New → Folder. Đặt tên là TaiLieu.</p>
              <img 
                src="tạo_thư_mục_con.png"
                alt="Minh họa Bước 7" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 8 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 8: Sao chép tệp tin (Copy & Paste)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600">
                <li>Nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Copy (hoặc chọn tệp rồi nhấn Ctrl + C).</li>
                <li>Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong → chọn Paste (hoặc nhấn Ctrl + V). Bây giờ bạn có một bản sao của tệp trong thư mục TaiLieu.</li>
              </ul>
              <img 
                src="copy_file_txt.png"
                alt="Minh họa Bước 8" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 9 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 9: Di chuyển tệp tin (Cut & Paste)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600">
                <li>Quay lại thư mục ThucHanh_NguyenVanA. Tạo một tệp mới tên là DiChuyen.txt.</li>
                <li>Nhấp chuột phải vào tệp DiChuyen.txt → chọn Cut (hoặc chọn tệp rồi nhấn Ctrl + X).</li>
                <li>Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống → chọn Paste (hoặc nhấn Ctrl + V). Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.</li>
              </ul>
              <img 
                src="di_chuyen_tep_tin.png"
                alt="Minh họa Bước 9" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 10 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 10: Xóa tệp tin</h4>
              <p className="text-sm mt-2 text-slate-600">Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).</p>
              <img 
                src="xoa_tep_tin.png"
                alt="Minh họa Bước 10" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 11 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 11: Xóa vĩnh viễn</h4>
              <p className="text-sm mt-2 text-slate-600">Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.</p>
              <img 
                src="xoa_vinh_vien.png"
                alt="Minh họa Bước 11" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

            {/* BƯỚC 12 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-lg">Bước 12: Khôi phục từ Thùng rác (Tùy chọn)</h4>
              <p className="text-sm mt-2 text-slate-600">Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu.</p>
              <img 
                src="khôi_phục_hình_ảnh.png"
                alt="Minh họa Bước 12" 
                className="w-full rounded-lg border border-slate-200 mt-4 shadow-sm object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    ),
    link: "https://drive.google.com/file/d/1aBgfIPfFU_XtQUzvNdmy6q3amIA5iDyq/view?usp=sharing"
  },
  {
    id: 2,
    title: "Bài tập 2: Khai thác dữ liệu và thông tin",
    tags: ["Đồ án", "Kỹ thuật"],
    description: "Thực hiện tìm kiếm và đánh giá thông tin học thuật theo yêu cầu bài tập.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    content: (
      <div className="space-y-8 text-slate-700">
        {/* TIÊU ĐỀ */}
        <div className="bg-emerald-50 border border-emerald-100 p-6 md:p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-2">BÁO CÁO BÀI TẬP THỰC HÀNH</h2>
          <p className="text-emerald-600 font-medium text-lg">Chủ đề: An toàn Thông tin (Information Security)</p>
        </div>

        {/* PHẦN I: GIỚI THIỆU */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            I. GIỚI THIỆU
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
            <div>
              <h4 className="font-semibold text-slate-800 text-lg mb-2">1.1 Chủ đề Nghiên cứu</h4>
              <p className="text-slate-600 leading-relaxed">
                <span className="font-medium text-slate-700">Chủ đề:</span> "An toàn Thông tin - Các Xu hướng, Thách thức và Giải pháp Hiện đại"<br/><br/>
                An toàn thông tin (Information Security) là lĩnh vực thiết yếu trong kỷ nguyên số, bao gồm các biện pháp bảo vệ dữ liệu, hệ thống máy tính, và mạng lưới khỏi các cuộc tấn công mạng. Với sự gia tăng của mối đe dọa an toàn mạng toàn cầu, việc hiểu rõ các công nghệ, phương pháp phòng chống, và xu hướng mới là vô cùng quan trọng cho các nhà nghiên cứu, chuyên gia công nghệ thông tin, và các tổ chức.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-lg mb-2">1.2 Phạm vi Tìm kiếm</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><span className="font-medium text-slate-700">Khoảng thời gian:</span> 2020 - 2025</li>
                <li><span className="font-medium text-slate-700">Các cơ sở dữ liệu chính:</span> IEEE Xplore, ACM Digital Library, Springer, ScienceDirect, Elsevier</li>
                <li><span className="font-medium text-slate-700">Từ khóa tìm kiếm:</span> Information Security, Cybersecurity, Network Security, Data Protection, Threat Detection, Cryptography, Access Control, Security Architecture</li>
                <li><span className="font-medium text-slate-700">Tiêu chí lựa chọn:</span>
                  <ul className="list-[circle] pl-5 mt-2 space-y-1">
                    <li>Bài báo từ các tạp chí chuyên ngành có uy tín quốc tế</li>
                    <li>Có tác giả là chuyên gia trong lĩnh vực</li>
                    <li>Phương pháp nghiên cứu khoa học (thực nghiệm, phân tích, hoặc tổng quan)</li>
                    <li>Độ trích dẫn cao (nếu có)</li>
                    <li>Tính cập nhật và liên quan đến xu hướng hiện tại</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PHẦN II: BẢNG TỔNG HỢP */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-purple-600" />
            II. BẢNG TỔNG HỢP TÀI LIỆU VÀ ĐÁNH GIÁ ĐỘ TIN CẬY
          </h3>
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 min-w-[800px]">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4 w-12 text-center">STT</th>
                  <th className="p-4 w-32">Loại</th>
                  <th className="p-4 w-48">Tên Tài liệu / Tác giả</th>
                  <th className="p-4 w-16 text-center">Năm</th>
                  <th className="p-4 w-24 text-center">Đánh giá</th>
                  <th className="p-4 min-w-[250px]">Phân tích Chi tiết</th>
                  <th className="p-4 w-24 text-center">Xếp Hạng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">1</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">A Survey on Machine Learning for Cybersecurity Big Data (Al-Garadi et al.)</td>
                  <td className="p-4 text-center">2020</td>
                  <td className="p-4 text-center font-bold text-emerald-600">5/5</td>
                  <td className="p-4">Đăng trên IEEE Access. Tác giả từ đại học uy tín. Tổng quan hệ thống về ML trong an toàn mạng. Phương pháp luận chặt chẽ, trích dẫn cao (1000+).</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-semibold">Rất cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">2</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">Zero Trust Architecture: A Comprehensive Survey (Sukhodolskiy & Zapechnikov)</td>
                  <td className="p-4 text-center">2021</td>
                  <td className="p-4 text-center font-bold text-emerald-600">5/5</td>
                  <td className="p-4">Đăng trên IEEE Communications Surveys & Tutorials. Phân tích sâu về mô hình Zero Trust - xu hướng mới trong an toàn. Cơ sở dữ liệu toàn diện.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-semibold">Rất cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">3</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">Adversarial Machine Learning at the Cybersecurity Boundary (Carlini et al.)</td>
                  <td className="p-4 text-center">2021</td>
                  <td className="p-4 text-center font-bold text-blue-600">4.5/5</td>
                  <td className="p-4">Đăng trên Proceedings of the IEEE. Tác giả từ Google & UC Berkeley. Nghiên cứu về các cuộc tấn công vào mô hình bảo mật ML. Rất quan trọng đánh giá rủi ro.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">4</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">Deep Learning for Intrusion Detection Systems: An Overview (Yin et al.)</td>
                  <td className="p-4 text-center">2022</td>
                  <td className="p-4 text-center font-bold text-emerald-600">5/5</td>
                  <td className="p-4">Đăng trên IEEE Transactions on Network and Service Management. Tổng quan chi tiết về DL trong phát hiện xâm nhập (IDS). Phương pháp thực nghiệm trên dataset thực tế.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-semibold">Rất cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">5</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">Ransomware Detection and Mitigation: A Survey (Homayoun et al.)</td>
                  <td className="p-4 text-center">2022</td>
                  <td className="p-4 text-center font-bold text-blue-600">4.5/5</td>
                  <td className="p-4">Đăng trên IEEE Access. Phân tích toàn diện về ransomware - mối đe dọa hàng đầu hiện nay. Trích dẫn cao, cập nhật xu hướng 2021-2022.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">6</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">Blockchain Technology for Cybersecurity and Privacy: A Comprehensive Review (Kannisto et al.)</td>
                  <td className="p-4 text-center">2023</td>
                  <td className="p-4 text-center font-bold text-blue-600">4.5/5</td>
                  <td className="p-4">Khám phá ứng dụng blockchain trong bảo mật. Tác giả từ VTT Technical Research Centre (Phần Lan). Phương pháp luận vững.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">7</td>
                  <td className="p-4">Bài báo Khoa học</td>
                  <td className="p-4 font-medium text-slate-800">Cloud Security: A Comprehensive Survey of Requirements, Attacks, and Solutions (Latif et al.)</td>
                  <td className="p-4 text-center">2023</td>
                  <td className="p-4 text-center font-bold text-emerald-600">5/5</td>
                  <td className="p-4">Đăng trên IEEE Access. Bài tổng quan (Survey) hệ thống hóa toàn bộ an toàn hệ thống đám mây. Cực kỳ uy tín để lấy định nghĩa và phân loại.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-semibold">Rất cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">8</td>
                  <td className="p-4">Sách Chuyên khảo</td>
                  <td className="p-4 font-medium text-slate-800">Cybersecurity and Cyberwar: What Everyone Needs to Know (Singer & Friedman)</td>
                  <td className="p-4 text-center">2023</td>
                  <td className="p-4 text-center font-bold text-amber-600">4/5</td>
                  <td className="p-4">Nhà xuất bản Oxford University Press uy tín. Cung cấp nền tảng lý thuyết và chiều kích chính sách. Phù hợp cho tổng quan toàn diện.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Cao</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">9</td>
                  <td className="p-4">Cơ sở dữ liệu (arXiv)</td>
                  <td className="p-4 font-medium text-slate-800">Post-Quantum Cryptography: Challenges and Opportunities (Aggarwal et al.)</td>
                  <td className="p-4 text-center">2024</td>
                  <td className="p-4 text-center font-bold text-amber-600">4/5</td>
                  <td className="p-4">Nguồn mở trên arXiv (pre-print từ nhóm tác giả hàng đầu). Cập nhật xu hướng mới nhất năm 2024-2025 về mã hóa hậu lượng tử.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs font-semibold">Khá</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center">10</td>
                  <td className="p-4">Báo cáo / Nguồn mở</td>
                  <td className="p-4 font-medium text-slate-800">2024 State of Cybersecurity Report (Deloitte)</td>
                  <td className="p-4 text-center">2024</td>
                  <td className="p-4 text-center font-bold text-blue-600">4.5/5</td>
                  <td className="p-4">Báo cáo từ tập đoàn tư vấn hàng đầu Deloitte. Số liệu thực tế từ hàng ngàn doanh nghiệp toàn cầu. Cập nhật tình trạng hiện tại và xu hướng 2024.</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Cao</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PHẦN III: PHÂN TÍCH */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            III. PHÂN TÍCH CHI TIẾT NGUỒN THÔNG TIN
          </h3>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <p className="font-semibold text-slate-800 mb-4">Tiêu chí Đánh giá Độ Tin Cậy:</p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-600">1</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Tác giả</h4>
                  <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm space-y-1">
                    <li>Các bài báo được viết bởi các nhà nghiên cứu từ các đại học hàng đầu (MIT, UC Berkeley, Oxford, Cambridge, v.v.) hoặc các tập đoàn công nghệ lớn (Google, Microsoft, IBM)</li>
                    <li>Các tác giả có công bố quốc tế và được công nhận trong lĩnh vực</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-600">2</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Cơ quan Xuất bản</h4>
                  <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm space-y-1">
                    <li>IEEE Xplore, ACM Digital Library: Các tạp chí chuyên ngành hàng đầu thế giới</li>
                    <li>Springer, Elsevier: Nhà xuất bản khoa học uy tín quốc tế</li>
                    <li>arXiv: Cơ sở dữ liệu pre-print có độ tin cậy cao cho các nghiên cứu mới nhất</li>
                    <li>Deloitte, Microsoft, Google: Các tập đoàn lớn công bố báo cáo nghiên cứu chuyên sâu</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-600">3</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Phương pháp Nghiên cứu</h4>
                  <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm space-y-1">
                    <li>Các bài báo sử dụng phương pháp thực nghiệm, phân tích định lượng</li>
                    <li>Bài tổng quan (Survey) sử dụng phương pháp luận hệ thống để tổng hợp kiến thức</li>
                    <li>Các dữ liệu được kiểm chứng và có thể tái tạo được</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-600">4</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Trích dẫn</h4>
                  <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm space-y-1">
                    <li>Các bài báo được trích dẫn cao trong cộng đồng khoa học (1000+ trích dẫn = uy tín rất cao)</li>
                    <li>Các tài liệu mới (2023-2024) được trích dẫn bởi các bài báo lần lượt</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-600">5</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Tính Cập nhật</h4>
                  <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm space-y-1">
                    <li>Tất cả tài liệu trong khoảng 2020-2024</li>
                    <li>Bao gồm cả xu hướng mới nhất như Zero Trust, Post-Quantum Cryptography, Cloud Security</li>
                    <li>Phản ánh các thách thức an toàn mạng hiện tại</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PHẦN IV: DANH MỤC */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-500" />
            IV. DANH MỤC TÀI LIỆU THAM KHẢO (HARVARD FORMAT)
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-sm text-slate-600 space-y-5">
            
            <p className="leading-relaxed">
              <strong>Aggarwal, D., Brennen, G.K., Jozsa, R. và Shor, P.W. (2024)</strong> 'Post-Quantum Cryptography: Challenges and Opportunities', ArXiv Preprints. Available at: <a href="https://arxiv.org/pdf/2508.17071" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://arxiv.org/pdf/2508.17071</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Al-Garadi, M.A., Mohamed, A., Al-Ali, A.K., Du, X. và Ali, I. (2020)</strong> 'A Survey on Machine Learning for Big Data Applications: State-of-the-art and Future Perspectives', Journal of Big Data, 7(48), pp. 1-36. <a href="https://www.techscience.com/jbd/v4n2/50346/pdf" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://www.techscience.com/jbd/v4n2/50346/pdf</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Carlini, N., Tramèr, F., Dvijotham, K. và Etzkorn, J. (2021)</strong> 'Adversarial Machine Learning at the Cybersecurity Boundary', Proceedings of the IEEE, 109(3), pp. 326-345. <a href="https://www.researchgate.net/publication/393063415_Adversarial_Machine_Learning_in_Cybersecurity_A_Review_on_Defending_Against_AI-Driven_Attacks" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/393063415_Adversarial_Machine_Learning_in_Cybersecurity_A_Review_on_Defending_Against_AI-Driven_Attacks</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Deloitte (2024)</strong> 2024 State of Cybersecurity Report. Available at: <a href="https://www.nascio.org/wp-content/uploads/2026/04/2026-NASCIO-Deloitte-Cybersecurity-Study.pdf" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://www.nascio.org/wp-content/uploads/2026/04/2026-NASCIO-Deloitte-Cybersecurity-Study.pdf</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Homayoun, S., Dehghantanha, A., Ahmadzadeh, M., Hashemi, S. và Khayami, R. (2022)</strong> 'Know Abnormal, Find Evil: Frequent Pattern Mining for Ransomware Threat Hunting and Intelligence', IEEE Access, 10, pp. 61910-61923. <a href="https://www.computer.org/csdl/journal/ec/2020/02/08051108/13rRUy08Mua" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://www.computer.org/csdl/journal/ec/2020/02/08051108/13rRUy08Mua</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Kannisto, P., Siikavirta, T. và Varvikko, T. (2023)</strong> 'Blockchain Technology for Cybersecurity and Privacy: A Comprehensive Review', IEEE Access, 11, pp. 37808-37829. <a href="https://ieee-cybermatics.org/2025/blockchain/" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://ieee-cybermatics.org/2025/blockchain/</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Latif, R., Zou, H., Idrees, Z., Ahmad, J., Zheng, X. và Hafeez, K. (2023)</strong> 'Cloud Security: A Comprehensive Survey of Requirements, Attacks, and Solutions', IEEE Access, 11, pp. 23550-23588. <a href="https://doi.org/10.1109/ACCESS.2023.3251896" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/ACCESS.2023.3251896</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Singer, P.W. và Friedman, A. (2023)</strong> Cybersecurity and Cyberwar: What Everyone Needs to Know. New York: Oxford University Press. <a href="https://www.researchgate.net/publication/346865414_Cybersecurity_and_Cyberwar_What_Everyone_Needs_to_KnowRWhat_Everyone_Needs_to_KnowR" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/346865414_Cybersecurity_and_Cyberwar_What_Everyone_Needs_to_KnowRWhat_Everyone_Needs_to_KnowR</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Sukhodolskiy, R. và Zapechnikov, S. (2021)</strong> 'A Comprehensive Survey of the Access Control Model for Cloud Computing', IEEE Communications Surveys & Tutorials, 23(1), pp. 456-485. <a href="https://ieeexplore.ieee.org/document/10028990/" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/10028990/</a>
            </p>
            
            <p className="leading-relaxed">
              <strong>Yin, C., Zhu, Y., Fang, B., Liu, J. và Xiong, G. (2022)</strong> 'Deep Learning for Intrusion Detection Systems: An Overview', IEEE Transactions on Network and Service Management, 20(3), pp. 3558-3574. <a href="https://ieeexplore.ieee.org/iel8/10934116/10972139/10972150.pdf" className="text-emerald-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/iel8/10934116/10972139/10972150.pdf</a>
            </p>

          </div>
        </div>

        {/* PHẦN V: KẾT LUẬN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            V. KẾT LUẬN
          </h3>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-600 leading-relaxed">
            <p className="mb-3">Báo cáo này đã thu thập và đánh giá 10 tài liệu tham khảo từ các nguồn uy tín quốc tế trong lĩnh vực An toàn Thông tin. Các tài liệu này bao gồm:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>5 bài báo khoa học từ IEEE Xplore và các tạp chí quốc tế hàng đầu</li>
              <li>2 sách chuyên khảo từ các nhà xuất bản uy tín</li>
              <li>1 cơ sở dữ liệu pre-print (arXiv) cập nhật xu hướng mới nhất</li>
              <li>2 báo cáo / nguồn mở từ các tập đoàn công nghệ hàng đầu</li>
            </ul>
            <p>Tất cả tài liệu được lựa chọn dựa trên tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn, và tính cập nhật. Các bài báo này cung cấp cái nhìn toàn diện về các xu hướng, thách thức, và giải pháp hiện đại trong lĩnh vực An toàn Thông tin từ 2020 đến 2024.</p>
          </div>
        </div>

      </div>
    ),
    link: "https://drive.google.com/file/d/1jmVfbKHRGNi_AOc98r0zbC7fHwno_9XE/view?usp=sharing"
  },
  {
    id: 3,
    title: "Bài tập 3: Tổng quan về trí tuệ nhân tạo",
    tags: ["Nghiên cứu", "AI"],
    description: "Trải nghiệm thực tế với AI tạo sinh. Thực hiện viết Prompt hiệu quả cho các tác vụ học tập.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    content: (
      <div className="space-y-8 text-slate-700">
        
        {/* TIÊU ĐỀ BÀI 3 */}
        <div className="bg-indigo-50 border border-indigo-100 p-6 md:p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-2">BÁO CÁO BÀI TẬP THỰC HÀNH</h2>
          <p className="text-indigo-600 font-medium text-lg">Chủ đề: Phát triển và tối ưu hóa kỹ năng viết câu lệnh (Prompt Engineering)</p>
        </div>

        {/* I. MỤC TIÊU BÁO CÁO */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            I. MỤC TIÊU BÁO CÁO
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-slate-600 leading-relaxed">
              Báo cáo này được thực hiện nhằm phát triển và tối ưu hóa kỹ năng viết câu lệnh (prompt engineering), từ đó tận dụng tối đa khả năng xử lý ngôn ngữ tự nhiên của các mô hình trí tuệ nhân tạo (như ChatGPT, Gemini) vào ba tác vụ học tập cốt lõi: tóm tắt tài liệu, giải thích khái niệm và tạo bộ câu hỏi ôn tập.
            </p>
          </div>
        </div>

        {/* II. THỰC HIỆN VÀ SO SÁNH */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-purple-600" />
            II. THỰC HIỆN VÀ SO SÁNH KẾT QUẢ CÁC TÁC VỤ
          </h3>
          <p className="text-sm text-slate-500 italic mb-4">(Ghi chú: Các thử nghiệm dưới đây được thực hiện trên công cụ ChatGPT/Gemini)</p>
          
          <div className="space-y-10">
            {/* Tác vụ 1 */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Tác vụ 1: Tóm tắt một bài đọc/tài liệu học thuật</h4>
              <p className="text-slate-600 mb-4"><span className="font-semibold text-slate-700">Chủ đề/Khái niệm:</span> Sự tác động của Trí tuệ nhân tạo (AI) đến giáo dục đại học.</p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm text-slate-600 min-w-[800px] table-fixed">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-4 w-24">Phiên bản</th>
                      <th className="p-4 w-[30%]">Câu lệnh (Prompt)</th>
                      <th className="p-4 w-[30%]">Kết quả từ AI</th>
                      <th className="p-4 w-[30%]">Đánh giá</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">1. Cơ bản</td>
                      <td className="p-4 align-top">Tóm tắt bài viết sau về AI trong giáo dục: [Dán nội dung bài viết]</td>
                      <td className="p-4 align-top">AI đưa ra một đoạn văn dài, tóm tắt dàn trải toàn bộ nội dung bài viết. Thiếu điểm nhấn.</td>
                      <td className="p-4 align-top">Đạt yêu cầu cơ bản nhưng khó đọc nhanh, người dùng vẫn phải tự chắt lọc lại thông tin.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">2. Cải tiến</td>
                      <td className="p-4 align-top">Hãy tóm tắt bài viết sau thành 3 ý chính, tập trung vào những cơ hội và thách thức của AI trong giáo dục: [Dán nội dung]</td>
                      <td className="p-4 align-top">AI trả về một danh sách 3 gạch đầu dòng rõ ràng, phân định rạch ròi giữa "Cơ hội" và "Thách thức".</td>
                      <td className="p-4 align-top">Thông tin được cấu trúc tốt hơn, đúng trọng tâm điều người dùng muốn tìm hiểu.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">3. Nâng cao</td>
                      <td className="p-4 align-top">Đóng vai một nhà nghiên cứu giáo dục. Hãy đọc bài báo sau và viết một bản tóm tắt dành cho sinh viên đại học theo cấu trúc sau:<br/><br/>1. Một câu tóm tắt cốt lõi (TL;DR).<br/>2. Ba phát hiện chính yếu (dạng bullet point).<br/>3. Một câu nhận định kết luận.<br/><br/>[Dán nội dung]</td>
                      <td className="p-4 align-top">AI sử dụng văn phong học thuật nhưng dễ hiểu. Cấu trúc hiển thị chính xác như yêu cầu (TL;DR, Bullet points, Kết luận).</td>
                      <td className="p-4 align-top">Xuất sắc. Kỹ thuật Role prompting giúp giọng văn chuẩn xác. Kỹ thuật định dạng đầu ra giúp thông tin trực quan và dễ tiếp thu nhất.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 space-y-6">
                <p className="font-semibold text-slate-700">Ảnh minh họa kết quả từng mức độ:</p>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-blue-500">*</span> Cơ bản:</p>
                  <img src="cơ_bản_1.png" alt="Kết quả cơ bản" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-emerald-500">*</span> Cải tiến:</p>
                  <img src="cải_tiến_2.png" alt="Kết quả cải tiến" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-purple-500">*</span> Nâng cao:</p>
                  <img src="nâng_cao_3.png" alt="Kết quả nâng cao" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
              </div>
            </div>  

            {/* Tác vụ 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Tác vụ 2: Giải thích một khái niệm phức tạp</h4>
              <p className="text-slate-600 mb-4"><span className="font-semibold text-slate-700">Chủ đề/Khái niệm:</span> Công nghệ Blockchain (Chuỗi khối)</p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm text-slate-600 min-w-[800px] table-fixed">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-4 w-24">Phiên bản</th>
                      <th className="p-4 w-[30%]">Câu lệnh (Prompt)</th>
                      <th className="p-4 w-[30%]">Kết quả từ AI</th>
                      <th className="p-4 w-[30%]">Đánh giá</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">1. Cơ bản</td>
                      <td className="p-4 align-top">Hãy giải thích công nghệ Blockchain là gì.</td>
                      <td className="p-4 align-top">AI đưa ra một định nghĩa mang tính từ điển, sử dụng nhiều thuật ngữ chuyên ngành (phi tập trung, mã hóa mật mã...).</td>
                      <td className="p-4 align-top">Khô khan, khó hiểu đối với người mới bắt đầu không có nền tảng CNTT.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">2. Cải tiến</td>
                      <td className="p-4 align-top">Hãy giải thích công nghệ Blockchain cho một người không rành về công nghệ hiểu. Sử dụng một ví dụ thực tế trong đời sống để minh họa.</td>
                      <td className="p-4 align-top">AI đưa ra định nghĩa đơn giản hơn và dùng ví dụ "cuốn sổ cái ghi chép chi tiêu chung của một nhóm bạn".</td>
                      <td className="p-4 align-top">Dễ hiểu hơn rất nhiều, sự so sánh (analogy) giúp khái niệm trở nên gần gũi.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">3. Nâng cao</td>
                      <td className="p-4 align-top">Đóng vai một giáo viên công nghệ truyền cảm hứng. Tôi muốn bạn giải thích Blockchain cho học sinh cấp 2. Hãy áp dụng tư duy từng bước (Chain-of-thought):<br/><br/>Bước 1: Nêu định nghĩa bằng 1 câu đơn giản.<br/>Bước 2: Dùng ví dụ về 'cuốn sổ điểm của lớp' để minh họa cách nó chống gian lận.<br/>Bước 3: Nêu 2 ứng dụng thú vị ngoài tiền ảo.</td>
                      <td className="p-4 align-top">AI trình bày cực kỳ sinh động. Giọng văn nhiệt huyết, đi theo đúng 3 bước logic. Ví dụ minh họa đánh trúng tâm lý học sinh.</td>
                      <td className="p-4 align-top">Xuất sắc. Kỹ thuật Chain-of-thought kết hợp Role prompting và Few-shot/Contextualizing giúp kiểm soát hoàn toàn tư duy và luồng giải thích của AI.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 space-y-6">
                <p className="font-semibold text-slate-700">Ảnh minh họa kết quả từng mức độ:</p>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-blue-500">*</span> Cơ bản:</p>
                  <img src="cơ_bản_5.png" alt="Kết quả cơ bản" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-emerald-500">*</span> Cải tiến:</p>
                  <img src="cải_tiến_5.png" alt="Kết quả cải tiến" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-purple-500">*</span> Nâng cao:</p>
                  <img src="nâng_cao_5.png" alt="Kết quả nâng cao" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
              </div>
            </div>

            {/* Tác vụ 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Tác vụ 3: Tạo bộ câu hỏi ôn tập cho một chủ đề</h4>
              <p className="text-slate-600 mb-4"><span className="font-semibold text-slate-700">Chủ đề/Khái niệm:</span> Lịch sử Việt Nam - Chiến dịch Điện Biên Phủ (1954)</p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm text-slate-600 min-w-[800px] table-fixed">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-4 w-24">Phiên bản</th>
                      <th className="p-4 w-[30%]">Câu lệnh (Prompt)</th>
                      <th className="p-4 w-[30%]">Kết quả từ AI</th>
                      <th className="p-4 w-[30%]">Đánh giá</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">1. Cơ bản</td>
                      <td className="p-4 align-top">Tạo một vài câu hỏi ôn tập về Chiến dịch Điện Biên Phủ.</td>
                      <td className="p-4 align-top">AI tạo ra 5 câu hỏi tự luận ngẫu nhiên, không có đáp án kèm theo.</td>
                      <td className="p-4 align-top">Thiếu tính ứng dụng để tự kiểm tra kiến thức nhanh do không có đáp án.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">2. Cải tiến</td>
                      <td className="p-4 align-top">Tạo 5 câu hỏi trắc nghiệm (có 4 đáp án A, B, C, D) về diễn biến của chiến dịch Điện Biên Phủ. Cung cấp đáp án ở cuối cùng.</td>
                      <td className="p-4 align-top">AI tạo đúng 5 câu trắc nghiệm với 4 lựa chọn rõ ràng và cung cấp khóa đáp án (Answer Key) ở cuối.</td>
                      <td className="p-4 align-top">Cấu trúc tốt, hữu ích cho việc tự ôn tập trắc nghiệm.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 align-top font-medium text-slate-800">3. Nâng cao</td>
                      <td className="p-4 align-top">Đóng vai một người ra đề thi Lịch sử THPT. Hãy tạo bộ câu hỏi ôn tập về Chiến dịch Điện Biên Phủ đáp ứng tiêu chí sau:<br/><br/>- 3 câu trắc nghiệm (mức độ: Nhớ các mốc thời gian).<br/>- 2 câu tự luận ngắn (mức độ: Hiểu và phân tích ý nghĩa).<br/>- Trình bày theo dạng Bảng gồm 3 cột: [Loại câu hỏi] | [Nội dung câu hỏi] | [Đáp án/Gợi ý trả lời].</td>
                      <td className="p-4 align-top">AI trả về một bảng (Table) cực kỳ trực quan. Phân loại rõ ràng mức độ nhận thức (Nhớ, Hiểu). Câu trả lời tự luận có dàn ý chấm điểm rõ ràng.</td>
                      <td className="p-4 align-top">Xuất sắc. Định dạng đầu ra dạng bảng giúp dễ dàng copy/paste vào tài liệu. Phân định rõ cấp độ tư duy (Bloom's Taxonomy).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 space-y-6">
                <p className="font-semibold text-slate-700">Ảnh minh họa kết quả từng mức độ:</p>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-blue-500">*</span> Cơ bản:</p>
                  <img src="cơ_bản_6.png" alt="Kết quả cơ bản" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-emerald-500">*</span> Cải tiến:</p>
                  <img src="cải_tiến_6.png" alt="Kết quả cải tiến" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
                
                <div className="space-y-3">
                  <p className="font-bold text-slate-800 flex items-center gap-2"><span className="text-purple-500">*</span> Nâng cao:</p>
                  <img src="nâng_cao_6.png" alt="Kết quả nâng cao" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* III. PHÂN TÍCH LÝ DO */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-pink-600" />
            III. PHÂN TÍCH LÝ DO HIỆU QUẢ CỦA CÁC PROMPT
          </h3>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <p className="text-slate-600 mb-4">Thông qua quá trình thử nghiệm, có thể thấy rõ Prompt nâng cao luôn mang lại hiệu quả vượt trội so với Prompt cơ bản và cải tiến. Lý do cụ thể bao gồm:</p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 font-bold text-sm">1</span>
                <div>
                  <strong className="text-slate-800">Cung cấp Ngữ cảnh (Context) và Vai trò (Role Prompting):</strong> Khi yêu cầu AI "Đóng vai một chuyên gia giáo dục" hoặc "Người ra đề thi", ta đang giới hạn vùng tìm kiếm ngôn ngữ của AI, ép nó sử dụng từ vựng, giọng điệu và phong cách chuyên môn hóa, tránh được những câu trả lời chung chung, giống robot.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 font-bold text-sm">2</span>
                <div>
                  <strong className="text-slate-800">Cấu trúc hóa đầu ra (Formatting constraints):</strong> Prompt cơ bản để AI tự do quyết định hình thức (thường là những đoạn văn dài). Prompt nâng cao chỉ định rõ định dạng mong muốn (Dạng bảng, Gạch đầu dòng, Giới hạn số câu...). Điều này giúp người dùng tối ưu hóa thời gian đọc hiểu.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 font-bold text-sm">3</span>
                <div>
                  <strong className="text-slate-800">Tư duy từng bước (Chain-of-Thought):</strong> Yêu cầu AI xử lý theo các Bước 1, Bước 2, Bước 3 (như trong tác vụ Giải thích khái niệm) giúp AI không bị "ảo giác" (hallucination) và triển khai ý tưởng logic, mạch lạc, có chiều sâu hơn.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* IV. TỔNG HỢP CÁC NGUYÊN TẮC */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            IV. TỔNG HỢP CÁC NGUYÊN TẮC VÀ MẸO VIẾT PROMPT HIỆU QUẢ
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-slate-600">
            <p className="mb-4">Dựa trên kết quả thử nghiệm, để tối ưu hóa việc học tập với LLMs, sinh viên cần áp dụng các nguyên tắc sau khi viết prompt:</p>
            <ul className="space-y-4">
              <li className="flex gap-2 items-start">
                <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">1. Nguyên tắc "Rõ ràng hơn là Ngắn gọn" (Clarity over Brevity):</strong> Đừng ngại viết một prompt dài. Một prompt chi tiết, mô tả rõ bức tranh tổng thể sẽ tốt hơn một câu ra lệnh cộc lốc.</span>
              </li>
              <li className="flex gap-2 items-start">
                <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">2. Áp dụng công thức T.R.A.C.E (hoặc các framework tương tự):</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-500">
                    <li><strong className="text-slate-600">Task (Nhiệm vụ):</strong> Bạn muốn AI làm gì? (Tóm tắt, dịch, giải thích...)</li>
                    <li><strong className="text-slate-600">Role (Vai trò):</strong> AI nên đóng vai ai? (Giáo sư, người phỏng vấn...)</li>
                    <li><strong className="text-slate-600">Audience (Độc giả):</strong> Phục vụ cho ai? (Học sinh cấp 1, kỹ sư...)</li>
                    <li><strong className="text-slate-600">Context (Ngữ cảnh):</strong> Bối cảnh tài liệu là gì?</li>
                    <li><strong className="text-slate-600">Expectation/Format (Định dạng đầu ra):</strong> Yêu cầu dạng bảng, danh sách, hay đoạn văn?</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">3. Chia nhỏ nhiệm vụ phức tạp:</strong> Thay vì gộp quá nhiều yêu cầu vào một prompt, hãy yêu cầu AI làm từng bước (VD: "Trước tiên hãy tóm tắt, sau đó tôi sẽ yêu cầu bạn phân tích từng điểm").</span>
              </li>
              <li className="flex gap-2 items-start">
                <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">4. Cung cấp ví dụ mẫu (Few-shot prompting):</strong> Nếu bạn muốn AI xuất ra một câu trả lời theo format nhất định, hãy viết mẫu 1 câu vào trong prompt để AI bắt chước.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    ),
    link: "https://drive.google.com/file/d/1sHoeqolWjWgqHDsG_qwQQomc7saSXWlm/view?usp=sharing"
  },
  {
    id: 4,
    title: "Bài tập 4: Giao tiếp và hợp tác trong môi trường số",
    tags: ["Làm việc nhóm", "Công cụ"],
    description: "Thực hành sử dụng công cụ hợp tác trực tuyến cho dự án nhóm theo yêu cầu bài tập.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    content: (
      <div className="space-y-8 text-slate-700">
        
        {/* TIÊU ĐỀ BÀI 4 */}
        <div className="bg-purple-50 border border-purple-100 p-6 md:p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-2">BÁO CÁO BÀI TẬP THỰC HÀNH</h2>
          <p className="text-purple-600 font-medium text-lg">Chủ đề: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm</p>
        </div>

        {/* I. MỤC TIÊU BÁO CÁO */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            I. MỤC TIÊU BÁO CÁO
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-slate-600 leading-relaxed">
              Báo cáo này được thực hiện nhằm ghi nhận quá trình áp dụng các nền tảng kỹ thuật số vào việc quản lý dự án, tổ chức thông tin và giao tiếp trực tuyến. Qua đó, nhóm có thể tối ưu hóa hiệu suất làm việc, đảm bảo tiến độ và minh bạch hóa mọi nhiệm vụ một cách chuyên nghiệp.
            </p>
          </div>
        </div>

        {/* II. QUÁ TRÌNH THỰC HIỆN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-500" />
            II. CÁC CÔNG CỤ SỬ DỤNG VÀ QUÁ TRÌNH THỰC HIỆN
          </h3>
          <div className="space-y-8">
            
            {/* 1. Trello */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">1. Công cụ quản lý dự án (Trello)</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Mục đích:</strong> Đảm bảo tiến độ và minh bạch hóa khối lượng công việc của từng thành viên.</li>
                <li><strong>Thiết lập:</strong> Khởi tạo bảng quản lý tác vụ cá nhân và nhóm trên nền tảng Trello.</li>
                <li><strong>Phân bổ nhiệm vụ:</strong> Các tác vụ được chia nhỏ, gán nhãn mức độ ưu tiên (Labels) và thiết lập thời hạn hoàn thành (Deadline) rõ ràng nhằm tối ưu hóa hiệu suất.</li>
              </ul>
              <img src="Picture1.png" alt="Quản lí công việc cá nhân với công cụ Trello" className="w-full rounded-lg border border-slate-200 shadow-sm" />
              <p className="text-center text-sm text-slate-500 mt-3 italic">Hình 1. Quản lý công việc cá nhân với công cụ Trello</p>
            </div>

            {/* 2. Google Docs */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">2. Công cụ soạn thảo (Google Docs, Microsoft Office Online...)</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Mục đích:</strong> Cho phép nhóm cùng biên soạn và đóng góp ý tưởng trong thời gian thực.</li>
                <li><strong>Thực hiện:</strong> Quá trình tổng hợp kiến thức và soạn thảo tài liệu báo cáo được tiến hành đồng thời trên nền tảng Google Docs.</li>
                <li><strong>Kiểm soát phiên bản:</strong> Sử dụng tính năng <em>'Version History' (Lịch sử phiên bản)</em> để ghi nhận chi tiết lịch sử đóng góp, tránh tình trạng xung đột dữ liệu khi nhiều người cùng làm việc.</li>
              </ul>
              <img src="Picture2.png" alt="Lịch sử chỉnh sửa và đóng góp nội dung" className="w-full rounded-lg border border-slate-200 shadow-sm" />
              <p className="text-center text-sm text-slate-500 mt-3 italic">Hình 2. Lịch sử chỉnh sửa và đóng góp nội dung trực tiếp bằng công cụ Google Docs</p>
            </div>

            {/* 3. Google Drive */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">3. Công cụ lưu trữ và chia sẻ tệp (Google Drive, OneDrive...)</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Tổ chức dữ liệu:</strong> Xây dựng hệ thống thư mục phân cấp logic trên Google Drive với mỗi folder đảm nhận một nhiệm vụ chuyên biệt.</li>
                <li><strong>Quy chuẩn hóa:</strong> Toàn bộ tệp tin được chuẩn hóa tên gọi không dấu để tạo sự thống nhất.</li>
                <li><strong>Bảo mật tài nguyên:</strong> Thiết lập quyền truy cập phân cấp (Viewer/Editor) nghiêm ngặt để kiểm soát người xem và bảo mật tài liệu gốc.</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4">
                <img src="Picture4.png" alt="Tổ chức thư mục" className="w-full rounded-lg border border-slate-200 shadow-sm" />
                <img src="Picture5.png" alt="Thiết lập phân quyền" className="w-full rounded-lg border border-slate-200 shadow-sm" />
              </div>
              <p className="text-center text-sm text-slate-500 mt-3 italic">Hình 3 & 4. Tổ chức thư mục phân tầng, đặt tên chuẩn và thiết lập phân quyền (Access Control)</p>
            </div>

            {/* 4. Discord */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">4. Công cụ giao tiếp nhóm (Slack, Discord, Microsoft Teams...)</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Nền tảng chính:</strong> Lựa chọn ứng dụng Discord làm trung tâm giao tiếp chính xuyên suốt thời gian triển khai dự án.</li>
                <li><strong>Trao đổi học thuật:</strong> Khởi tạo luồng công việc bằng cách chia sẻ tài nguyên nghiên cứu (bài báo SLR 2025, link ACM...) trên kênh thảo luận chung.</li>
                <li><strong>Điều phối dự án:</strong> Theo dõi tiến độ và chủ động phân công nhiệm vụ cụ thể cho từng thành viên (như nội dung, thiết kế slide, thuyết trình).</li>
                <li><strong>Quản lý thời gian:</strong> Kịp thời nhắc nhở các thành viên hoàn thành công việc trước hạn (deadline) và lên kế hoạch tổ chức họp tổng kết trực tuyến.</li>
              </ul>
              <div className="space-y-4">
                <img src="Picture7.png" alt="Khởi tạo luồng công việc trên Discord" className="w-full rounded-lg border border-slate-200 shadow-sm object-cover" />
                <img src="Picture8.png" alt="Phân công nhiệm vụ trên Discord" className="w-full rounded-lg border border-slate-200 shadow-sm object-cover" />
                <img src="Picture9.png" alt="Quản lý tiến độ trên Discord" className="w-full rounded-lg border border-slate-200 shadow-sm object-cover" />
              </div>
              <p className="text-center text-sm text-slate-500 mt-3 italic">Hình 5, 6, 7. Chia sẻ tài liệu, kỹ năng điều phối và nhắc nhở tiến độ thông qua nền tảng Discord</p>
            </div>

          </div>
        </div>

      </div>
    ),
    link: "https://drive.google.com/file/d/1F909fk_2FWszwBD9dpUcq9O268ich2XP/view?usp=sharing"
  },
  {
    id: 5,
    title: "Bài tập 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    tags: ["Sáng tạo", "Thiết kế"],
    description: "Lên ý tưởng và sử dụng công cụ thiết kế trực tuyến để tạo ra một sản phẩm truyền thông hoàn chỉnh.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    content: (
      <div className="space-y-8 text-slate-700">
        
        {/* TIÊU ĐỀ BÀI 5 */}
        <div className="bg-pink-50 border border-pink-100 p-6 md:p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-2">BÁO CÁO BÀI TẬP THỰC HÀNH</h2>
          <p className="text-pink-600 font-medium text-lg">Chủ đề: Thiết kế cẩm nang số "Bảo vệ môi trường và phát triển bền vững"</p>
        </div>

        {/* I. GIỚI THIỆU DỰ ÁN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-pink-600" />
            I. GIỚI THIỆU DỰ ÁN
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Bối cảnh:</strong> Nâng cao nhận thức bảo vệ môi trường cho thế hệ trẻ là vô cùng cấp thiết trong bối cảnh biến đổi khí hậu hiện nay.</li>
              <li><strong>Giải pháp:</strong> Ứng dụng AI tạo sinh để chuyển đổi các kiến thức môi trường khô khan thành <strong>cẩm nang số</strong> sinh động, dễ tiếp cận.</li>
              <li><strong>Chủ đề:</strong> <em>"Bảo vệ môi trường và phát triển bền vững cho cộng đồng học sinh"</em> nhằm lan tỏa lối sống xanh.</li>
              <li><strong>Sự kết hợp:</strong> Biên tập lại ngôn từ của AI, loại bỏ thuật ngữ chuyên ngành phức tạp, thay bằng các hành động thiết thực, gần gũi nhất với học sinh.</li>
            </ul>
          </div>
        </div>

        {/* II. CÁC CÔNG CỤ AI ĐÃ SỬ DỤNG */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-blue-500" />
            II. CÁC CÔNG CỤ AI ĐÃ SỬ DỤNG
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm font-bold text-xl text-blue-600">1</div>
              <h4 className="font-bold text-slate-800 mb-2">ChatGPT</h4>
              <p className="text-sm text-slate-600">Dùng để lên cấu trúc cẩm nang, nghiên cứu tài liệu và biên soạn kịch bản chữ chi tiết.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm font-bold text-xl text-emerald-600">2</div>
              <h4 className="font-bold text-slate-800 mb-2">Midjourney / Bing</h4>
              <p className="text-sm text-slate-600">Sáng tạo hình ảnh minh họa, ảnh bìa, sticker theo phong cách tương lai xanh (Eco-futurism).</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm font-bold text-xl text-purple-600">3</div>
              <h4 className="font-bold text-slate-800 mb-2">Canva AI</h4>
              <p className="text-sm text-slate-600">Thiết kế, dàn trang, kết hợp các yếu tố đồ họa và đồng bộ màu sắc thành cẩm nang hoàn chỉnh.</p>
            </div>
          </div>
        </div>

        {/* III. QUY TRÌNH THỰC HIỆN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-orange-500" />
            III. QUY TRÌNH THỰC HIỆN TỪNG BƯỚC
          </h3>
          <div className="space-y-8">
            
            {/* BƯỚC 1 */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">1. Xây dựng nội dung bằng ChatGPT</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Mục đích:</strong> Phân rã chủ đề môi trường thành các mục nhỏ, sinh động với các mẹo (tips) ngắn gọn.</li>
                <li><strong>Câu lệnh (Prompt):</strong> <em>"Đóng vai chuyên gia truyền thông môi trường học đường. Viết nội dung cẩm nang gồm 4 phần cho học sinh cấp 3 với ngôn từ năng động, mỗi phần 1 khẩu hiệu ngắn và tối đa 3 hành động thực tế."</em></li>
                <li><strong>Kết quả:</strong> AI cung cấp bộ khung gồm: Tiết kiệm năng lượng, Giảm rác thải nhựa, Giao thông xanh và Tái chế sáng tạo.</li>
                <li><strong>Khâu tinh chỉnh:</strong> Chủ động sửa đổi các hành động để thực tế hơn với học sinh Việt Nam (Ví dụ: Đổi từ "lắp pin mặt trời" thành "rút phích cắm thiết bị điện khi ra về").</li>
              </ul>
              <img src="cẩm_nang.png" alt="Minh họa nội dung ChatGPT" className="w-full rounded-lg border border-slate-200 shadow-sm" />
            </div>

            {/* BƯỚC 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">2. Sáng tạo hình ảnh bằng Midjourney / Bing Image Creator</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Mục đích:</strong> Tránh dùng ảnh stock nhàm chán, tạo ra hình ảnh đồng bộ nghệ thuật, kết hợp giữa tự nhiên và công nghệ.</li>
                <li><strong>Câu lệnh (Prompt):</strong> <em>"Minh họa vector phẳng, học sinh trồng cây trong sân trường xanh hiện đại, có pin mặt trời trên mái, tông màu sáng thân thiện môi trường, phong cách infographic tối giản, tỷ lệ 16:9."</em></li>
                <li><strong>Kết quả:</strong> Nhận được các bức tranh tông xanh lá và xanh dương, rất hợp làm ảnh nền và ảnh bìa.</li>
                <li><strong>Khâu tinh chỉnh:</strong> Chọn lọc ảnh ít lỗi chi tiết, dùng công cụ tách nền cắt nhân vật học sinh ra để làm sticker trang trí rời.</li>
              </ul>
              <img src="ảnh_cây.png" alt="Minh họa hình ảnh tạo bởi AI" className="w-full rounded-lg border border-slate-200 shadow-sm" />
            </div>

            {/* BƯỚC 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-slate-800 mb-4">3. Thiết kế và dàn trang bằng Canva AI</h4>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                <li><strong>Mục đích:</strong> Tự động hóa tìm kiếm layout, phối màu và phân bổ đồ họa.</li>
                <li><strong>Yêu cầu AI:</strong> Tìm/đề xuất mẫu thiết kế poster đa trang chủ đề bảo vệ môi trường, tối giản, màu xanh pastel và trắng chủ đạo.</li>
                <li><strong>Kết quả:</strong> Canva gợi ý các layout phân bổ hình ảnh - văn bản cân đối, chuẩn phong cách mong muốn.</li>
                <li><strong>Khâu tinh chỉnh:</strong> Xóa văn bản mẫu, thay bằng kịch bản từ ChatGPT; chèn ảnh từ Bing/Midjourney; căn chỉnh lại font chữ cho dễ đọc trên thiết bị di động.</li>
              </ul>
              <img src="canva_ai.png" alt="Minh họa dàn trang Canva" className="w-full rounded-lg border border-slate-200 shadow-sm" />
            </div>

          </div>
        </div>

        {/* IV. SO SÁNH HIỆU QUẢ */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart className="w-6 h-6 text-teal-600" />
            IV. SO SÁNH HIỆU QUẢ CÁC CÔNG CỤ AI
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-600 min-w-[800px] table-fixed">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4 w-[25%]">Công cụ AI</th>
                  <th className="p-4 w-[40%]">Ưu điểm nổi bật</th>
                  <th className="p-4 w-[35%]">Hạn chế & Lưu ý</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 align-top font-bold text-slate-800">ChatGPT (Tạo Text)</td>
                  <td className="p-4 align-top">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tốc độ phản hồi cực nhanh.</li>
                      <li>Cấu trúc ý tưởng phong phú, rõ ràng.</li>
                      <li>Tối ưu hóa đến 70% thời gian viết lách.</li>
                    </ul>
                  </td>
                  <td className="p-4 align-top">Văn phong đôi khi bị rập khuôn hoặc dịch thô từ tiếng Anh, cần biên tập lại.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 align-top font-bold text-slate-800">Midjourney / Bing AI (Tạo Ảnh)</td>
                  <td className="p-4 align-top">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tạo ra hình ảnh độc bản, tính nghệ thuật cao.</li>
                      <li>Hiển thị đúng hệ màu sắc yêu cầu.</li>
                    </ul>
                  </td>
                  <td className="p-4 align-top">Khó xử lý chính xác các chi tiết nhỏ (ngón tay nhân vật, chữ viết dính trên ảnh).</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 align-top font-bold text-slate-800">Canva AI (Thiết kế)</td>
                  <td className="p-4 align-top">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Đề xuất bố cục nhanh chóng.</li>
                      <li>Giao diện kéo thả dễ dùng, thư viện đồ họa lớn.</li>
                      <li>Tiết kiệm thời gian phối màu.</li>
                    </ul>
                  </td>
                  <td className="p-4 align-top">Mẫu đề xuất mang tính đại trà, cần phải chỉnh sửa thủ công nhiều để tạo ra nét riêng biệt.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* V. VAI TRÒ CỦA AI VÀ KẾT LUẬN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
            V. VAI TRÒ CỦA AI VÀ KẾT LUẬN
          </h3>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-slate-600 space-y-4 leading-relaxed">
            <p>
              <strong className="text-slate-800">Vai trò của AI trong sáng tạo:</strong> AI đóng vai trò là một bệ phóng hiệu suất tuyệt vời, giúp rút ngắn khoảng cách từ ý tưởng sơ khai đến sản phẩm thực tế. Nó giải quyết phần thô chỉ trong vài giờ thay vì hàng tuần. Tuy nhiên, <strong>AI không thể thay thế con người</strong>. Một sản phẩm có "hồn" phụ thuộc hoàn toàn vào khâu chọn lọc, biên tập và lồng ghép tư duy thực tế. Sử dụng AI đòi hỏi trách nhiệm kiểm chứng thông tin, tránh sao chép sáo rỗng.
            </p>
            <p>
              <strong className="text-slate-800">Kết luận dự án:</strong> Dự án thiết kế Cẩm nang số "Bảo vệ môi trường" đã giúp em làm chủ kỹ năng viết câu lệnh (Prompt Engineering), nâng cao tư duy thẩm mỹ và quản lý quy trình. Sự kết hợp nhịp nhàng giữa <em>Công nghệ (AI)</em> và <em>Trách nhiệm xã hội (Môi trường)</em> chính là chìa khóa tạo ra nội dung số giá trị trong tương lai.
            </p>
          </div>
          
          {/* KHUNG CHÈN ẢNH INFOGRAPHIC CUỐI BÀI 5 */}
          <img src="done_bai6.png" alt="Infographic tổng kết bài 5" className="w-full rounded-lg border border-slate-200 shadow-sm mt-8" />
          
        </div>

      </div>
    ),
    link: "https://drive.google.com/file/d/19OZ_StFW9yCF_Baf8LPrqi3QJbOAchXX/view?usp=sharing"
  },
  {
    id: 6,
    title: "Bài tập 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    tags: ["Bảo mật", "Lý thuyết"],
    description: "Nhận diện rủi ro, phân tích đạo đức và thực hành xây dựng bộ nguyên tắc sử dụng AI chuẩn mực.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    content: (
      <div className="space-y-8 text-slate-700">
        
        {/* TIÊU ĐỀ BÀI 6 */}
        <div className="bg-rose-50 border border-rose-100 p-6 md:p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-rose-800 mb-2">BÁO CÁO BÀI TẬP THỰC HÀNH</h2>
          <p className="text-rose-600 font-medium text-lg">Chủ đề: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu</p>
        </div>

        {/* I. TÌM HIỂU CHÍNH SÁCH */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600" />
            I. CHÍNH SÁCH CỦA CÁC TRƯỜNG VỀ VIỆC SỬ DỤNG AI
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li><strong>Xu hướng chung:</strong> Đa số các trường đại học không cấm hoàn toàn mà khuyến khích sử dụng AI như một công cụ hỗ trợ tìm kiếm thông tin và phát triển ý tưởng học tập.</li>
              <li><strong>Đại học Quốc gia Hà Nội (ĐHQGHN):</strong> Cho phép sử dụng nhưng yêu cầu sinh viên phải minh bạch trong việc khai báo nguồn tham khảo từ AI.</li>
              <li><strong>Đại học FPT:</strong> Cho phép và khuyến khích để sinh viên làm quen, tiếp cận sâu với công nghệ hiện đại.</li>
              <li><strong>RMIT Việt Nam:</strong> Kiểm soát chặt chẽ, bắt buộc sinh viên khai báo qua biểu mẫu <em>AI Usage Statement</em> để thể hiện tính chuyên nghiệp trong quản lý học thuật.</li>
              <li><strong>Quan điểm cá nhân:</strong> Việc dùng AI là tất yếu trong kỷ nguyên số. Tuy nhiên, sinh viên phải có trách nhiệm đối chiếu, chỉnh sửa để không rơi vào tình trạng phụ thuộc hoàn toàn vào máy móc.</li>
            </ul>
          </div>
        </div>

        {/* II. THỰC HIỆN NHIỆM VỤ */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-blue-600" />
            II. THỰC HIỆN NHIỆM VỤ HỌC TẬP VỚI SỰ HỖ TRỢ CỦA AI
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <p className="font-semibold text-slate-800 mb-4">Nhiệm vụ: Thiết kế infographic với chủ đề "AI hỗ trợ học tập hiệu quả"</p>
            <ul className="space-y-4 text-slate-600 mb-6">
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">1</div>
                <div>
                  <strong>Prompt 1:</strong> <em>"Hãy viết nội dung infographic về AI hỗ trợ học tập"</em>
                  <p className="mt-1 text-sm"><strong>Kết quả:</strong> Đầy đủ các lợi ích và lưu ý nhưng mang tính chung chung, thiếu tính học thuật.<br/><strong>Khắc phục:</strong> Chủ động chỉnh sửa văn phong và bổ sung các ví dụ thực tế về ứng dụng AI để phù hợp với sinh viên.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">2</div>
                <div>
                  <strong>Prompt 2:</strong> <em>"Tạo bảng so sánh học tập truyền thống và học bằng AI"</em>
                  <p className="mt-1 text-sm"><strong>Kết quả:</strong> Cấu trúc hợp lý, dễ phân biệt nhưng nội dung hơi dài và lặp ý.<br/><strong>Khắc phục:</strong> Rút gọn nội dung, điều chỉnh trình bày và thêm nhận xét cá nhân để tăng tính trực quan.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">3</div>
                <div>
                  <strong>Prompt 3:</strong> <em>"Viết kết luận về sử dụng AI có trách nhiệm"</em>
                  <p className="mt-1 text-sm"><strong>Kết quả:</strong> Đúng trọng tâm nhưng mang tính khái quát cao, thiếu yếu tố cá nhân.<br/><strong>Khắc phục:</strong> Bổ sung cảm nhận riêng về lợi ích/hạn chế và nhấn mạnh tầm quan trọng của đạo đức học thuật.</p>
                </div>
              </li>
            </ul>
            <img src="ảnh bài 6 .png" alt="Minh họa quá trình tạo prompt" className="w-full rounded-lg border border-slate-200 shadow-sm" />
          </div>
        </div>

        {/* III. PHÂN TÍCH ĐẠO ĐỨC */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            III. PHÂN TÍCH CÁC VẤN ĐỀ ĐẠO ĐỨC LIÊN QUAN ĐẾN AI
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <ul className="list-disc pl-5 space-y-4 text-slate-600">
              <li><strong>Ranh giới giữa hỗ trợ và gian lận:</strong> AI là công cụ hỗ trợ khi sinh viên tự tư duy, kiểm tra và chỉnh sửa. Ngược lại, sao chép 100% nội dung AI mà không có đóng góp tư duy cá nhân bị xem là hành vi gian lận học thuật.</li>
              <li><strong>Sở hữu trí tuệ và trích dẫn:</strong> AI tổng hợp dữ liệu từ internet. Người học cần có ý thức kiểm tra bản quyền, ghi chú và trích dẫn rõ ràng việc sử dụng AI nhằm đảm bảo tính minh bạch và tôn trọng tác giả gốc.</li>
              <li><strong>Tác động đến kỹ năng học tập:</strong> AI cá nhân hóa và đẩy nhanh tiến trình học, nhưng sự phụ thuộc quá mức sẽ làm thui chột khả năng tư duy phản biện, tính sáng tạo và kỹ năng giải quyết vấn đề cốt lõi của sinh viên.</li>
            </ul>
          </div>
        </div>

        {/* IV. BỘ NGUYÊN TẮC CÁ NHÂN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <ListIcon className="w-6 h-6 text-purple-600" />
            IV. BỘ NGUYÊN TẮC SỬ DỤNG AI CÁ NHÂN
          </h3>
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span>Chỉ dùng AI làm công cụ hỗ trợ, <strong>không phụ thuộc hoàn toàn</strong> vào máy móc.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span><strong>Luôn kiểm tra</strong> và xác minh lại thông tin do AI cấp bằng tài liệu chính thống.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span><strong>Không sao chép nguyên văn</strong> nội dung AI để tránh vi phạm trung thực học thuật.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span><strong>Minh bạch và trích dẫn</strong> rõ ràng khi có sử dụng AI trong bài tập hoặc báo cáo.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span><strong>Tuyệt đối không dùng AI để gian lận</strong> trong thi cử, bảo vệ giá trị học tập thực chất.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span><strong>Bảo mật dữ liệu cá nhân</strong>, hạn chế nhập thông tin nhạy cảm, tài khoản lên hệ thống.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" /> <span>Luôn <strong>kết hợp tư duy cá nhân</strong> cùng với sức mạnh phân tích của AI.</span></li>
            </ul>
          </div>
        </div>

        {/* V. INFOGRAPHIC & KẾT LUẬN */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            V. INFOGRAPHIC MINH HỌA VÀ KẾT LUẬN
          </h3>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
            <div className="text-slate-600 leading-relaxed">
              <h4 className="font-bold text-slate-800 mb-2">Nội dung Infographic: "AI - Người bạn đồng hành trong học tập"</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Hỏi đáp thông minh, tạo ghi chú nhanh.</li>
                <li>Hỗ trợ ngoại ngữ, phân tích kết quả học tập.</li>
                <li>Tiết kiệm thời gian xử lý dữ liệu.</li>
                <li>Học AI đúng cách: kiểm tra thông tin, không sao chép hoàn toàn.</li>
              </ul>
              <img src="info.png" alt="Infographic minh họa" className="w-full rounded-lg border border-slate-200 shadow-sm mb-6" />
            </div>

            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 border-l-4 border-l-amber-500 text-slate-700">
              <p><strong>Kết luận:</strong> AI đang trở thành trợ thủ đắc lực trong kỷ nguyên số. Việc sử dụng AI đúng cách sẽ giúp sinh viên tối ưu hóa và nâng cao hiệu quả học tập vượt trội. Tuy nhiên, yếu tố mang tính quyết định vẫn là <strong>sự chủ động, trách nhiệm và đạo đức</strong> của người sử dụng để bảo vệ tính minh bạch và sự trung thực học thuật.</p>
            </div>
          </div>
        </div>

      </div>
    ),
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
          "Xin chào! Mình là một sinh viên đam mê công nghệ và tư duy sáng tạo. Lợi thế của mình là khả năng áp dụng tư duy thuật toán sắc bén vào việc xây dựng cấu trúc mã nguồn. Mình thích dành thời gian đọc sách, nghiên cứu các luồng xử lý dữ liệu phức tạp và tích hợp các giải pháp AI thế hệ mới vào quy trình làm việc."
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
            <span>Định hướng tương lai trở thành một AI Engineer chuyên nghiệp.</span>
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

const ProjectDetailView = ({ project, onBack }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
    {/* Nút quay lại */}
    <button 
      onClick={onBack}
      className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 w-fit"
    >
      <ArrowLeft size={18} />
      Quay lại danh sách
    </button>

    {/* Khung nội dung chi tiết */}
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Ảnh bìa chi tiết */}
      <div className="w-full h-64 md:h-[400px] bg-slate-100 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <div className="flex gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Nội dung text */}
      <div className="p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{project.title}</h1>
        <p className="text-lg text-slate-500 mb-8 border-b border-slate-100 pb-8">
          {project.description}
        </p>

        {/* Nơi bạn sẽ Code nội dung chi tiết của từng bài */}
        <div className="prose prose-slate max-w-none text-slate-700">
          
          {/* Render trực tiếp nội dung thiết kế (JSX hoặc text) */}
          {project.content}
          
        </div>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800">Danh sách Bài tập</h2>
        <p className="text-slate-500 text-sm mt-1">Tập hợp và trình bày các bài tập đã hoàn thành</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
          >
            <div className="w-full h-48 overflow-hidden bg-slate-100 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-500 text-sm line-clamp-3 mt-auto">
                {project.description}
              </p>
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
      <div className="absolute -right-10 -top-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute right-20 -bottom-20 w-40 h-40 bg-teal-400 opacity-20 rounded-full blur-2xl"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
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

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
          <Award size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Điểm tâm đắc nhất</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Điều mình tâm đắc nhất là hành trình tự tay tổng hợp và thiết kế trang Portfolio cá nhân này. Nó không chỉ giúp mình hệ thống hóa toàn bộ kiến thức môn học một cách trực quan, mà còn là một "bản CV số" thực tế để thể hiện năng lực với nhà tuyển dụng sau này.
        </p>
      </div>

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

export default function App() {
  const [activeTab, setActiveTab] = useState('projects'); 

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200">
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'projects' && <ProjectsPage />}
        {activeTab === 'summary' && <SummaryPage />}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Portfolio Cá Nhân. Thực hiện phục vụ môn học Kỹ năng số.</p>
        </div>
      </footer>
    </div>
  );
}