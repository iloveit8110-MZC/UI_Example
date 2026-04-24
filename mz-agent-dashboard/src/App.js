import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { 
  Send,
  Workflow,
  Database,
  CheckCircle2,
  MessageSquare,
  Cloud,
  Sparkles,
  FileText,
  Target,
  CheckSquare,
  Building,
  Calendar,
  DollarSign
} from 'lucide-react';

const AgentCoreUI = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: '안녕하세요! AgentCore 문서 에이전트입니다. APN PoC 프로젝트 계획서를 작성해 드리겠습니다. 먼저 고객사 정보와 요구사항을 알려주세요.', time: '오전 10:00', avatar: '🤖' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSidebar, setActiveSidebar] = useState('chat');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isProcessing]);

  // 문서 상태 모델
  const [documentState, setDocumentState] = useState({
    document_id: "poc_001",
    template: "apn_poc_project_plan",
    meta: {
      customer: "",
      partner: "메가존클라우드",
      date: new Date().toISOString().split('T')[0]
    },
    sections: [
      {
        section_id: "executive_summary",
        title: "Executive Summary",
        required: true,
        status: "empty",
        blocks: [],
        tables: [],
        last_updated_by: null
      },
      {
        section_id: "success_criteria",
        title: "Success Criteria",
        required: true,
        status: "empty",
        blocks: [],
        tables: [],
        last_updated_by: null
      }
    ]
  });

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userMsg = { 
      role: 'user', 
      content: inputValue, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsProcessing(true);
    
    setTimeout(() => {
      const botReply = { 
        role: 'bot', 
        content: `요청하신 내용을 분석하여 문서를 업데이트했습니다. Executive Summary와 Success Criteria를 작성했어요.`, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '🤖'
      };
      setMessages(prev => [...prev, botReply]);
      
      // 문서 상태 업데이트 예시
      setDocumentState(prev => ({
        ...prev,
        sections: prev.sections.map(section => 
          section.section_id === 'executive_summary' 
            ? {
                ...section,
                status: 'draft',
                blocks: [
                  {
                    type: 'paragraph',
                    content: '본 PoC 프로젝트는 고객사의 클라우드 마이그레이션 요구사항을 충족하기 위해 AWS 서비스를 활용한 솔루션을 검증하는 것을 목표로 합니다.'
                  }
                ],
                last_updated_by: 'section_writer'
              }
            : section.section_id === 'success_criteria'
            ? {
                ...section,
                status: 'draft',
                blocks: [
                  {
                    type: 'list',
                    items: [
                      '성능 목표: 99.9% 가용성 달성',
                      '비용 절감: 현재 대비 30% 이상 절감',
                      '마이그레이션 완료: 4주 내 완료'
                    ]
                  }
                ],
                last_updated_by: 'section_writer'
              }
            : section
        )
      }));
      setIsProcessing(false);
    }, 3000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'success_criteria', label: 'Success Criteria', icon: Target },
    { id: 'scope', label: 'Scope', icon: CheckSquare },
    { id: 'architecture', label: 'Architecture', icon: Building },
    { id: 'milestones', label: 'Milestones', icon: Calendar },
    { id: 'cost', label: 'Cost', icon: DollarSign },
    { id: 'acceptance', label: 'Acceptance', icon: CheckCircle2 }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      empty: { color: 'badge-empty', text: 'Empty' },
      draft: { color: 'badge-draft', text: 'Draft' },
      reviewing: { color: 'badge-reviewing', text: 'Reviewing' },
      final: { color: 'badge-final', text: 'Final' }
    };
    return badges[status] || badges.empty;
  };

  const renderSection = (section) => {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-bold text-slate-100">{section.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusBadge(section.status).color}`}>
            {getStatusBadge(section.status).text}
          </span>
        </div>
        
        {section.blocks.map((block, idx) => (
          <div key={idx} className="mb-4">
            {block.type === 'paragraph' && (
              <p className="text-slate-200 leading-relaxed">{block.content}</p>
            )}
            {block.type === 'table' && (
              <div className="overflow-x-auto">
                <table className="w-full bg-slate-700/50 rounded-lg overflow-hidden">
                  <thead className="bg-slate-600/50">
                    <tr>
                      {block.headers.map((header, headerIndex) => (
                        <th key={headerIndex} className="px-4 py-3 text-left text-sm font-semibold text-slate-200">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-t border-slate-600/50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-sm text-slate-300">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
        
        {section.blocks.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <FileText size={48} className="mx-auto mb-4 opacity-50" />
            <p>이 섹션은 아직 작성되지 않았습니다.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* 사이드바 */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Cloud className="text-blue-400 fill-current" size={24} />
          <h1>AgentCore</h1>
          <p>Document Agent</p>
        </div>
        <nav className="sidebar-nav">
          <button
            type="button"
            className={`nav-item ${activeSidebar === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveSidebar('chat')}
          >
            <MessageSquare size={18} />
            <span>통합 채팅 (Slack Sync)</span>
          </button>
          <button
            type="button"
            className={`nav-item ${activeSidebar === 'workflow' ? 'active' : ''}`}
            onClick={() => setActiveSidebar('workflow')}
          >
            <Workflow size={18} />
            <span>에이전트 워크플로우</span>
          </button>
          <button
            type="button"
            className={`nav-item ${activeSidebar === 'kb' ? 'active' : ''}`}
            onClick={() => setActiveSidebar('kb')}
          >
            <Database size={18} />
            <span>사내 지식베이스</span>
          </button>
        </nav>
        <div className="sidebar-footer">
          Powered by AWS Bedrock
        </div>
      </aside>

      {/* 메인 채팅창 */}
      <main className="main-chat">
        <header className="chat-header">
          <div className="flex items-center gap-4">
            <div className="chat-avatar">AC</div>
            <div>
              <h2 className="chat-title">통합 채팅</h2>
              <p className="chat-status">
                <span className="status-dot"></span>
                AgentCore Connected
              </p>
            </div>
          </div>
        </header>

        <div className="messages-container">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role === 'user' ? 'user' : ''}`}>
              <div className="message-avatar">{msg.avatar}</div>
              <div className="message-content">
                <div className={`message-bubble ${msg.role === 'user' ? 'user' : 'bot'}`}>
                  <p>{msg.content}</p>
                </div>
                <span className={`message-time ${msg.role === 'user' ? 'user' : ''}`}>{msg.time}</span>
              </div>
            </div>
          ))}
          {isProcessing && (
            <div className="processing-indicator">
              <div className="message-avatar">🤖</div>
              <div className="flex gap-1">
                <Sparkles size={16} />
                <span>에이전트 처리 중...</span>
                <div className="processing-dots">
                  <div className="processing-dot"></div>
                  <div className="processing-dot"></div>
                  <div className="processing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <footer className="chat-footer">
          <div className="input-container">
            <input 
              type="text" 
              className="chat-input"
              placeholder="요구사항을 입력하세요..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend} 
              disabled={!inputValue.trim()}
              className="send-button"
            >
              <Send size={18} />
            </button>
          </div>
        </footer>
      </main>

      {/* 우측: Live Document Workspace */}
      <aside className="document-workspace">
        <div className="document-tabs">
          <div className="tab-buttons">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const section = documentState.sections.find(s => s.section_id === tab.id) || { status: 'empty' };
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                  <span className={`tab-status status-${section.status}`}></span>
                </button>
              );
            })}
          </div>
          
          {/* 우측 상단: 누락 필드 알림 */}
          <div className="missing-count">
            누락: {documentState.sections.filter(s => s.status === 'empty').length}개
          </div>
          <button className="export-button">
            DOCX Export
          </button>
        </div>

        {/* 문서 본문 */}
        <div className="document-content">
          {activeTab === 'overview' && (
            <div className="overview-section">
              <div className="text-center mb-8">
                <h1 className="overview-title">APN PoC Project Plan</h1>
                <p className="overview-subtitle">AWS Partner Network Proof of Concept 프로젝트 계획서</p>
              </div>
              
              {/* 메타 정보 */}
              <div className="meta-form">
                <div className="form-group">
                  <label className="form-label">고객사</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={documentState.meta.customer}
                    onChange={(e) => setDocumentState(prev => ({
                      ...prev,
                      meta: { ...prev.meta, customer: e.target.value }
                    }))}
                    placeholder="고객사명 입력"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">날짜</label>
                  <input 
                    type="date" 
                    className="form-input"
                    value={documentState.meta.date}
                    onChange={(e) => setDocumentState(prev => ({
                      ...prev,
                      meta: { ...prev.meta, date: e.target.value }
                    }))}
                  />
                </div>
              </div>
              
              {/* 섹션 요약 */}
              <div className="section-grid">
                {documentState.sections.map(section => (
                  <div key={section.section_id} className="section-card">
                    <div className="section-header">
                      <h4 className="section-title">{section.title}</h4>
                      <span className={`section-badge badge-${section.status}`}>
                        {getStatusBadge(section.status).text}
                      </span>
                    </div>
                    <p className="section-desc">
                      {section.required ? '필수' : '선택'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab !== 'overview' && renderSection(
            documentState.sections.find(s => s.section_id === activeTab) || {
              title: '섹션 없음',
              status: 'empty',
              blocks: []
            }
          )}
        </div>
      </aside>
    </div>
  );
};

export default AgentCoreUI;