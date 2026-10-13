const storageKey = 'hr-nexus-demo-state';

const roleConfig = {
  'Super Admin': {
    label: 'Workspace owner',
    canViewSensitive: true,
    canEditEmployees: true,
    canApproveLeave: true,
    canManageRecruitment: true,
    canExport: true,
    canDelete: true,
  },
  'HR Manager': {
    label: 'People operations',
    canViewSensitive: true,
    canEditEmployees: true,
    canApproveLeave: true,
    canManageRecruitment: true,
    canExport: true,
    canDelete: false,
  },
  'HR Specialist': {
    label: 'HR workflows',
    canViewSensitive: true,
    canEditEmployees: true,
    canApproveLeave: true,
    canManageRecruitment: true,
    canExport: false,
    canDelete: false,
  },
  'Department Manager': {
    label: 'Team lead',
    canViewSensitive: false,
    canEditEmployees: false,
    canApproveLeave: true,
    canManageRecruitment: false,
    canExport: false,
    canDelete: false,
  },
  'Employee': {
    label: 'Team member',
    canViewSensitive: false,
    canEditEmployees: false,
    canApproveLeave: false,
    canManageRecruitment: false,
    canExport: false,
    canDelete: false,
  },
};

const departments = [
  'Engineering',
  'Product',
  'Sales',
  'Marketing',
  'Finance',
  'People Ops',
  'Operations',
  'Design',
];

const demoUsers = {
  'superadmin@hrnexus.io': { name: 'Azizbek Karimov', role: 'Super Admin', password: 'Demo123!' },
  'hrmanager@hrnexus.io': { name: 'Malika Rahimova', role: 'HR Manager', password: 'Demo123!' },
  'specialist@hrnexus.io': { name: 'Nodira Toshmatova', role: 'HR Specialist', password: 'Demo123!' },
  'deptmanager@hrnexus.io': { name: 'Dilshod Xoliqov', role: 'Department Manager', password: 'Demo123!' },
  'employee@hrnexus.io': { name: 'Jasur Salimov', role: 'Employee', password: 'Demo123!' },
};

const appState = {
  section: 'dashboard',
  user: null,
  employees: [
    {
      id: 'EMP-1024',
      name: 'Azizbek Karimov',
      email: 'azizbek@hrnexus.io',
      phone: '+1 (212) 555-0138',
      department: 'People Ops',
      jobTitle: 'VP of People',
      manager: 'Board',
      employmentType: 'Full-time',
      status: 'Active',
      office: 'New York',
      hireDate: '2021-03-06',
      salary: 185000,
      currency: 'USD',
      skills: ['People strategy', 'L&D', 'Compliance'],
      emergencyContact: 'Javohir Karimov • +1 (212) 555-0140',
      notes: 'Leads strategic workforce planning and org design.',
      photo: 'AK',
      isArchived: false,
    },
    {
      id: 'EMP-1046',
      name: 'Malika Rahimova',
      email: 'malika@hrnexus.io',
      phone: '+1 (415) 555-0141',
      department: 'People Ops',
      jobTitle: 'HR Manager',
      manager: 'Azizbek Karimov',
      employmentType: 'Full-time',
      status: 'Active',
      office: 'San Francisco',
      hireDate: '2022-06-12',
      salary: 124000,
      currency: 'USD',
      skills: ['Hiring', 'Compensation', 'Employee relations'],
      emergencyContact: 'Ravshan Rahimov • +1 (415) 555-0099',
      notes: 'Owns manager enablement and performance cycles.',
      photo: 'MR',
      isArchived: false,
    },
    {
      id: 'EMP-1103',
      name: 'Dilshod Xoliqov',
      email: 'dilshod@hrnexus.io',
      phone: '+1 (303) 555-0131',
      department: 'Engineering',
      jobTitle: 'Engineering Manager',
      manager: 'Azizbek Karimov',
      employmentType: 'Full-time',
      status: 'Active',
      office: 'Denver',
      hireDate: '2019-11-14',
      salary: 168000,
      currency: 'USD',
      skills: ['Platform', 'Leadership', 'Planning'],
      emergencyContact: 'Shahnoza Xoliqova • +1 (303) 555-0220',
      notes: 'Runs engineering operations and team development.',
      photo: 'DX',
      isArchived: false,
    },
    {
      id: 'EMP-1205',
      name: 'Jasur Salimov',
      email: 'jasur@hrnexus.io',
      phone: '+1 (206) 555-0168',
      department: 'Sales',
      jobTitle: 'Account Executive',
      manager: 'Dilshod Xoliqov',
      employmentType: 'Full-time',
      status: 'Active',
      office: 'Seattle',
      hireDate: '2023-02-21',
      salary: 98000,
      currency: 'USD',
      skills: ['Enterprise sales', 'Pipeline', 'Negotiation'],
      emergencyContact: 'Gulbahor Salimova • +1 (206) 555-0901',
      notes: 'Supports forecast reviews and customer expansion.',
      photo: 'JS',
      isArchived: false,
    },
    {
      id: 'EMP-1089',
      name: 'Nodira Toshmatova',
      email: 'nodira@hrnexus.io',
      phone: '+1 (917) 555-0113',
      department: 'People Ops',
      jobTitle: 'HR Specialist',
      manager: 'Malika Rahimova',
      employmentType: 'Full-time',
      status: 'Leave',
      office: 'New York',
      hireDate: '2021-09-17',
      salary: 91000,
      currency: 'USD',
      skills: ['Payroll', 'Benefits', 'Case support'],
      emergencyContact: 'Anvar Toshmatov • +1 (917) 555-0211',
      notes: 'Coordinates employee support workflows and documentation.',
      photo: 'NT',
      isArchived: false,
    },
    {
      id: 'EMP-1187',
      name: 'Gulnoza Ismoilova',
      email: 'gulnoza@hrnexus.io',
      phone: '+1 (650) 555-0148',
      department: 'Design',
      jobTitle: 'Senior Product Designer',
      manager: 'Dilshod Xoliqov',
      employmentType: 'Full-time',
      status: 'Active',
      office: 'Austin',
      hireDate: '2020-08-02',
      salary: 136000,
      currency: 'USD',
      skills: ['Systems design', 'UX research', 'Design ops'],
      emergencyContact: 'Murod Ismoilov • +1 (650) 555-0190',
      notes: 'Owns design system quality and cross-functional reviews.',
      photo: 'GI',
      isArchived: false,
    },
  ],
  attendance: [
    { employeeId: 'EMP-1024', name: 'Azizbek Karimov', department: 'People Ops', checkIn: '08:45', checkOut: '17:15', hours: 8.5, status: 'On time', late: false },
    { employeeId: 'EMP-1046', name: 'Malika Rahimova', department: 'People Ops', checkIn: '09:05', checkOut: '17:40', hours: 8.58, status: 'Late', late: true },
    { employeeId: 'EMP-1103', name: 'Dilshod Xoliqov', department: 'Engineering', checkIn: '08:33', checkOut: '17:11', hours: 8.63, status: 'On time', late: false },
    { employeeId: 'EMP-1205', name: 'Jasur Salimov', department: 'Sales', checkIn: '08:52', checkOut: '17:05', hours: 8.22, status: 'On time', late: false },
    { employeeId: 'EMP-1089', name: 'Nodira Toshmatova', department: 'People Ops', checkIn: '09:31', checkOut: '17:42', hours: 8.18, status: 'Late', late: true },
    { employeeId: 'EMP-1187', name: 'Gulnoza Ismoilova', department: 'Design', checkIn: '08:10', checkOut: '16:38', hours: 8.47, status: 'Early departure', late: false },
  ],
  leaveRequests: [
    { id: 'LV-1984', employee: 'Jasur Salimov', type: 'Annual leave', dates: '2026-10-18 to 2026-10-21', status: 'Pending', manager: 'Dilshod Xoliqov', reason: 'Family vacation' },
    { id: 'LV-1987', employee: 'Nodira Toshmatova', type: 'Sick leave', dates: '2026-10-11 to 2026-10-12', status: 'Approved', manager: 'Malika Rahimova', reason: 'Recovered flu symptoms' },
    { id: 'LV-1991', employee: 'Gulnoza Ismoilova', type: 'Personal leave', dates: '2026-10-27 to 2026-10-28', status: 'Pending', manager: 'Dilshod Xoliqov', reason: 'Personal appointment' },
  ],
  vacancies: [
    { title: 'Senior HR Business Partner', department: 'People Ops', location: 'Remote', type: 'Full-time', status: 'Open', applicants: 18 },
    { title: 'Staff Frontend Engineer', department: 'Engineering', location: 'New York', type: 'Full-time', status: 'Interviewing', applicants: 14 },
    { title: 'Demand Generation Manager', department: 'Marketing', location: 'Chicago', type: 'Full-time', status: 'Open', applicants: 11 },
  ],
  candidates: [
    { id: 'CAN-120', name: 'Shahnoza Usmonova', stage: 'Applied', role: 'Senior HR Business Partner', recruiter: 'Malika Rahimova' },
    { id: 'CAN-121', name: 'Akbarjon Yusupov', stage: 'Interview', role: 'Staff Frontend Engineer', recruiter: 'Dilshod Xoliqov' },
    { id: 'CAN-122', name: 'Madina Tursunova', stage: 'Assessment', role: 'Demand Generation Manager', recruiter: 'Nodira Toshmatova' },
    { id: 'CAN-123', name: 'Sardor Qodirov', stage: 'Offer', role: 'Product Designer', recruiter: 'Gulnoza Ismoilova' },
  ],
  performance: [
    { employee: 'Jasur Salimov', cycle: 'Q4 2026', progress: 82, rating: 'Exceeds', status: 'Manager review' },
    { employee: 'Dilshod Xoliqov', cycle: 'Q4 2026', progress: 74, rating: 'Strong', status: 'Self-assessment' },
    { employee: 'Gulnoza Ismoilova', cycle: 'Q4 2026', progress: 91, rating: 'Exceptional', status: 'Approved' },
  ],
  documents: [
    { name: 'Employment Contract – Jasur Salimov', category: 'Contracts', status: 'Active', expiry: '2027-04-29' },
    { name: 'Remote Work Policy', category: 'Policies', status: 'Approved', expiry: '2027-01-22' },
    { name: 'Certificate – CISSP', category: 'Certificates', status: 'Verified', expiry: '2027-03-10' },
  ],
  activities: [
    { kind: 'Leave', title: 'Leave request approved', detail: 'Jasur Salimov – Annual leave', time: '9:23 AM' },
    { kind: 'Hiring', title: 'Interview scheduled', detail: 'Shahnoza Usmonova – Senior HR Business Partner', time: '10:41 AM' },
    { kind: 'Review', title: 'Performance cycle closed', detail: 'Gulnoza Ismoilova – Q4 review', time: '1:12 PM' },
  ],
};

let currentUser = null;
let filterText = '';
let selectedDepartment = 'All';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"></rect><rect x="13.5" y="3.5" width="7" height="4.5" rx="1.5"></rect><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"></rect><rect x="3.5" y="13.5" width="7" height="4.5" rx="1.5"></rect></svg>', count: null },
  { id: 'employees', label: 'Employees', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 19v-1a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1"></path><circle cx="10.5" cy="7" r="3.2"></circle><path d="M17.5 8.5a2.8 2.8 0 1 1 0 5.5"></path><path d="M18 17.5v-1"></path></svg>', count: '128' },
  { id: 'attendance', label: 'Attendance', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"></circle><path d="M12 7.5v4.8l3.2 2.4"></path></svg>', count: null },
  { id: 'leave', label: 'Leave', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8 14.5 8l5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 2.8z"></path></svg>', count: '12' },
  { id: 'recruitment', label: 'Recruitment', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"></circle><path d="M12 7.5v9"></path><path d="M7.5 12h9"></path></svg>', count: '6' },
  { id: 'performance', label: 'Performance', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18V8.2"></path><path d="M12 18V5"></path><path d="M19 18v-9.5"></path><path d="M3.5 18.5h17"></path></svg>', count: null },
  { id: 'organization', label: 'Organization', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18v-9.5M12 18V9m9 9V6"></path><path d="M6 6.5h12"></path><path d="M9 6.5V4.7h6v1.8"></path></svg>', count: null },
  { id: 'documents', label: 'Documents', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h7l5 5V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2z"></path><path d="M14 3.5v5h5"></path><path d="M8 12h8"></path><path d="M8 16h8"></path></svg>', count: '4' },
];

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.employees && parsed.leaveRequests) {
      Object.assign(appState, parsed);
    }
  } catch (error) {
    console.warn('Unable to read saved state:', error);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify({ ...appState, user: currentUser }));
}

function getRolePermissions(role) {
  return roleConfig[role] || roleConfig['Employee'];
}

function loginUser(email, password) {
  const account = demoUsers[email];
  if (!account) return false;
  if (account.password !== password) return false;

  currentUser = { name: account.name, role: account.role, email };
  appState.user = currentUser;
  saveState();
  renderApp();
  return true;
}

function logoutUser() {
  currentUser = null;
  appState.user = null;
  localStorage.removeItem(storageKey);
  showLoginScreen();
}

function showLoginScreen() {
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('app-shell').classList.add('hidden');
}

function showAppScreen() {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
  renderApp();
}

function renderApp() {
  if (!currentUser) {
    showLoginScreen();
    return;
  }

  const rolePerms = getRolePermissions(currentUser.role);
  document.getElementById('profile-name').textContent = currentUser.name;
  document.getElementById('profile-role').textContent = roleConfig[currentUser.role].label;
  renderSidebar();
  renderBreadcrumbs();
  renderMainSection(rolePerms);
}

function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = navItems.map((item) => {
    const isActive = appState.section === item.id;
    return `
      <button class="nav-item ${isActive ? 'active' : ''}" data-section="${item.id}" type="button">
        <span class="nav-left">
          <span class="nav-icon">${item.icon}</span>
          <span>${item.label}</span>
        </span>
        ${item.count ? `<span class="nav-count">${item.count}</span>` : ''}
      </button>
    `;
  }).join('');

  nav.querySelectorAll('[data-section]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.section = button.dataset.section;
      renderApp();
    });
  });
}

function renderBreadcrumbs() {
  const breadcrumbs = document.getElementById('breadcrumbs');
  const crumb = navItems.find((item) => item.id === appState.section);
  const title = crumb ? crumb.label : 'Dashboard';
  breadcrumbs.innerHTML = `
    <span>Workspace</span>
    <span>›</span>
    <strong>${title}</strong>
  `;
}

function getFilteredEmployees() {
  return appState.employees.filter((employee) => {
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    const matchesSearch = !filterText || [
      employee.name,
      employee.email,
      employee.department,
      employee.jobTitle,
      employee.id,
    ].join(' ').toLowerCase().includes(filterText);
    return matchesDepartment && matchesSearch;
  });
}

function renderMainSection() {
  const main = document.getElementById('main-content');
  let sectionHtml = '';

  switch (appState.section) {
    case 'dashboard':
      sectionHtml = renderDashboardSection();
      break;
    case 'employees':
      sectionHtml = renderEmployeesSection();
      break;
    case 'attendance':
      sectionHtml = renderAttendanceSection();
      break;
    case 'leave':
      sectionHtml = renderLeaveSection();
      break;
    case 'recruitment':
      sectionHtml = renderRecruitmentSection();
      break;
    case 'performance':
      sectionHtml = renderPerformanceSection();
      break;
    case 'organization':
      sectionHtml = renderOrganizationSection();
      break;
    case 'documents':
      sectionHtml = renderDocumentsSection();
      break;
    default:
      sectionHtml = renderDashboardSection();
  }

  main.innerHTML = sectionHtml;
  bindGlobalActions();
  bindEmployeeTableActions();
  bindLeaveActions();
  bindCandidateActions();
  bindProfileActions();
  bindModalClose();
}

function bindGlobalActions() {
  const globalSearch = document.getElementById('global-search');
  if (globalSearch) {
    globalSearch.value = filterText || '';
    globalSearch.oninput = (event) => {
      filterText = event.target.value.trim().toLowerCase();
      renderApp();
    };
  }

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('open');
    });
  }
}

function renderDashboardSection() {
  const activeEmp = appState.employees.filter((employee) => employee.status === 'Active').length;
  const hiresThisMonth = 24;
  const exitsThisMonth = 6;
  const onLeave = appState.employees.filter((employee) => employee.status === 'Leave').length;
  const attendanceRate = 94;
  const pendingLeave = appState.leaveRequests.filter((req) => req.status === 'Pending').length;
  const birthdays = [
    { name: 'Leyla Axmedova', date: 'Oct 15' },
    { name: 'Farhod Nematov', date: 'Oct 20' },
    { name: 'Aysu Rahimova', date: 'Oct 25' },
  ];

  return `
    <div class="section-shell">
      <div class="dashboard-hero">
        <div class="panel hero-panel">
          <div class="hero-card">
            <div>
              <p class="eyebrow muted">Workforce overview</p>
              <h2>Welcome back, ${currentUser.name.split(' ')[0]}.</h2>
              <p>Here is the latest pulse of your people operations across the organization.</p>
            </div>
            <div class="hero-illustration" aria-hidden="true"></div>
          </div>
          <div class="metrics-strip">
            <div class="metric-pill">
              <strong>1,248</strong>
              <span>Total employees</span>
            </div>
            <div class="metric-pill">
              <strong>94%</strong>
              <span>Attendance rate</span>
            </div>
            <div class="metric-pill">
              <strong>12</strong>
              <span>Open approvals</span>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="chart-header">
            <h3>Headcount trend</h3>
            <span class="delta up">↑ 8.2%</span>
          </div>
          <div class="mini-bars" aria-label="Headcount chart">
            ${[48, 56, 54, 63, 72, 84, 92, 88, 96, 108, 116, 124].map((value, index) => `
              <div class="mini-bar" style="height:${value}%" title="${value}%"><span>${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][index]}</span></div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="kpi-grid">
        ${[
          ['Total employees', appState.employees.length, '+12 this quarter', 'up', '👥'],
          ['Active employees', activeEmp, '+8% vs prior', 'up', '✅'],
          ['New hires this month', hiresThisMonth, '+4 this week', 'up', '✨'],
          ['Employees left this month', exitsThisMonth, '-2 vs last month', 'down', '🚶'],
        ].map(([label, value, meta, tone, icon]) => `
          <div class="panel kpi-card">
            <div class="top">
              <div>
                <h3>${label}</h3>
                <strong>${value}</strong>
              </div>
              <div class="kpi-icon">${icon}</div>
            </div>
            <div class="kpi-meta">
              <span>${meta}</span>
              <span class="delta ${tone}">${tone === 'up' ? '↗' : '↘'}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="dashboard-grid">
        <div class="panel chart-panel">
          <div class="chart-header">
            <h3>Employees by department</h3>
            <button class="ghost-button" type="button">View breakdown</button>
          </div>
          <div class="department-bars">
            ${[
              ['Engineering', 82],
              ['Sales', 70],
              ['People Ops', 58],
              ['Marketing', 48],
              ['Design', 40],
            ].map(([name, pct]) => `
              <div class="bar-row">
                <span>${name}</span>
                <div class="bar"><span style="width:${pct}%"></span></div>
                <strong>${pct}%</strong>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="panel list-card">
          <div class="chart-header">
            <h3>Recent HR activities</h3>
            <button class="ghost-button" type="button">View all</button>
          </div>
          <div class="activity-list">
            ${appState.activities.map((item) => `
              <div class="activity-item">
                <div class="user-badge">
                  <span class="dot-status ${item.kind === 'Hiring' ? 'success' : item.kind === 'Review' ? 'warning' : 'neutral'}"></span>
                  <div>
                    <strong>${item.title}</strong>
                    <div class="muted">${item.detail}</div>
                  </div>
                </div>
                <span class="time">${item.time}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="card-grid">
        <div class="panel list-card">
          <div class="chart-header">
            <h3>Upcoming birthdays</h3>
            <span class="pill neutral">This month</span>
          </div>
          <div class="list-stack">
            ${birthdays.map((person) => `
              <div class="list-item">
                <div class="user-badge">
                  <div class="avatar">${person.name.split(' ').map((token) => token[0]).slice(0,2).join('')}</div>
                  <div>
                    <strong>${person.name}</strong>
                    <div class="muted">Birthday</div>
                  </div>
                </div>
                <span>${person.date}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="panel list-card">
          <div class="chart-header">
            <h3>Pending approvals</h3>
            <span class="pill warning">${pendingLeave} waiting</span>
          </div>
          <div class="list-stack">
            ${appState.leaveRequests.slice(0, 3).map((item) => `
              <div class="list-item">
                <div>
                  <strong>${item.employee}</strong>
                  <div class="muted">${item.type}</div>
                </div>
                <span class="pill ${item.status === 'Pending' ? 'warning' : 'success'}">${item.status}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderEmployeesSection() {
  const employeeData = getFilteredEmployees();
  const departmentsList = ['All', ...departments];

  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Employee directory</h2>
          <p>Search, filter, and manage employee records.</p>
        </div>
        <div class="header-actions">
          <button class="ghost-button" type="button">Export CSV</button>
          ${getRolePermissions(currentUser.role).canEditEmployees ? `<button class="primary-button" type="button" data-open-employee-form>Add employee</button>` : ''}
        </div>
      </div>

      <div class="panel">
        <div class="toolbar">
          <div class="filter-row">
            <input id="employee-search" type="search" placeholder="Search by name, email, department..." value="${filterText || ''}" />
            <select id="employee-department-filter">
              ${departmentsList.map((dept) => `<option value="${dept}" ${selectedDepartment === dept ? 'selected' : ''}>${dept}</option>`).join('')}
            </select>
          </div>
          <div class="inline-actions">
            <button class="ghost-button" type="button">Bulk archive</button>
            <button class="secondary-button" type="button">Create view</button>
          </div>
        </div>
      </div>

      <div class="panel">
        <table class="employee-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Manager</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${employeeData.length ? employeeData.map((employee) => `
              <tr>
                <td>
                  <div class="employee-name">
                    <div class="avatar">${employee.photo}</div>
                    <div>
                      <strong>${employee.name}</strong>
                      <span>${employee.id}</span>
                    </div>
                  </div>
                </td>
                <td>${employee.department}</td>
                <td>${employee.jobTitle}</td>
                <td><span class="pill ${employee.status === 'Active' ? 'success' : employee.status === 'Leave' ? 'warning' : 'neutral'}">${employee.status}</span></td>
                <td>${employee.manager}</td>
                <td>${employee.office}</td>
                <td>
                  <div class="inline-actions">
                    <button class="table-action" type="button" data-view-employee="${employee.id}">View</button>
                    ${getRolePermissions(currentUser.role).canEditEmployees ? `<button class="table-action" type="button" data-edit-employee="${employee.id}">Edit</button>` : ''}
                    ${getRolePermissions(currentUser.role).canDelete ? `<button class="table-action danger" type="button" data-delete-employee="${employee.id}">Delete</button>` : ''}
                  </div>
                </td>
              </tr>
            `).join('') : '<tr><td colspan="7"><div class="empty-state">No employees match the current filter.</div></td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAttendanceSection() {
  const attendanceRate = 94;

  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Attendance and work time</h2>
          <p>Track time entries, late arrivals, and work-hour compliance.</p>
        </div>
        <div class="header-actions">
          <button class="secondary-button" type="button">Download report</button>
          <button class="primary-button" type="button" data-attendance-checkin>Check in</button>
        </div>
      </div>

      <div class="stats-grid">
        <div class="panel">
          <div class="chart-header">
            <h3>Attendance Overview</h3>
          </div>
          <div class="progress-ring" aria-label="Attendance rate">
            <div class="inner"><strong>${attendanceRate}%</strong></div>
          </div>
        </div>

        <div class="panel">
          <div class="chart-header">
            <h3>Rules and policies</h3>
          </div>
          <div class="list-stack">
            <div class="list-item"><span>Standard workday</span><strong>8h / 5d</strong></div>
            <div class="list-item"><span>Late threshold</span><strong>09:00</strong></div>
            <div class="list-item"><span>Break policy</span><strong>30 mins</strong></div>
            <div class="list-item"><span>Overtime rules</span><strong>Weekly</strong></div>
          </div>
        </div>
      </div>

      <div class="panel">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Worked hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${appState.attendance.map((entry) => `
              <tr>
                <td>${entry.name}</td>
                <td>${entry.department}</td>
                <td>${entry.checkIn}</td>
                <td>${entry.checkOut}</td>
                <td>${entry.hours}h</td>
                <td><span class="pill ${entry.status === 'Late' || entry.status === 'Early departure' ? 'warning' : 'success'}">${entry.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderLeaveSection() {
  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Leave management</h2>
          <p>Review balances, requests, approvals, and leave history.</p>
        </div>
        <div class="header-actions">
          <button class="secondary-button" type="button">Calendar view</button>
          <button class="primary-button" type="button" data-open-leave-request>Request leave</button>
        </div>
      </div>

      <div class="summary-grid">
        <div class="panel">
          <div class="chart-header"><h3>Available leave</h3></div>
          <div class="list-stack">
            <div class="list-item"><span>Annual leave</span><strong>18 days</strong></div>
            <div class="list-item"><span>Sick leave</span><strong>8 days</strong></div>
            <div class="list-item"><span>Unpaid</span><strong>5 days</strong></div>
          </div>
        </div>

        <div class="panel">
          <div class="chart-header"><h3>Pending approvals</h3></div>
          <div class="list-stack">
            ${appState.leaveRequests.filter((request) => request.status === 'Pending').map((request) => `
              <div class="list-item">
                <div>
                  <strong>${request.employee}</strong>
                  <div class="muted">${request.type}</div>
                </div>
                <button class="table-action" type="button" data-approve-leave="${request.id}">Approve</button>
              </div>
            `).join('') || '<div class="empty-state">No pending leave requests.</div>'}
          </div>
        </div>

        <div class="panel">
          <div class="chart-header"><h3>Company policy</h3></div>
          <div class="list-stack">
            <div class="list-item"><span>Minimum notice</span><strong>3 days</strong></div>
            <div class="list-item"><span>Approval flow</span><strong>Manager + HR</strong></div>
            <div class="list-item"><span>Overlap validation</span><strong>Enabled</strong></div>
          </div>
        </div>
      </div>

      <div class="panel">
        <table class="data-table">
          <thead>
            <tr>
              <th>Request</th>
              <th>Employee</th>
              <th>Dates</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${appState.leaveRequests.map((request) => `
              <tr>
                <td>${request.id}</td>
                <td>${request.employee}</td>
                <td>${request.dates}</td>
                <td>${request.type}</td>
                <td><span class="pill ${request.status === 'Approved' ? 'success' : request.status === 'Pending' ? 'warning' : 'danger'}">${request.status}</span></td>
                <td>
                  <div class="inline-actions">
                    <button class="table-action" type="button" data-approve-leave="${request.id}">Approve</button>
                    <button class="table-action danger" type="button" data-reject-leave="${request.id}">Reject</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderRecruitmentSection() {
  const stages = [
    { name: 'Applied', candidates: appState.candidates.filter((candidate) => candidate.stage === 'Applied') },
    { name: 'Screening', candidates: appState.candidates.filter((candidate) => candidate.stage === 'Screening') },
    { name: 'Interview', candidates: appState.candidates.filter((candidate) => candidate.stage === 'Interview') },
    { name: 'Offer', candidates: appState.candidates.filter((candidate) => candidate.stage === 'Offer') },
  ];

  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Recruitment pipeline</h2>
          <p>Track applicants, stages, hiring managers, and conversion metrics.</p>
        </div>
        <div class="header-actions">
          <button class="secondary-button" type="button">Recruitment analytics</button>
          <button class="primary-button" type="button" data-open-candidate-form>Add candidate</button>
        </div>
      </div>

      <div class="panel">
        <div class="summary-grid">
          <div class="metric-pill"><strong>148</strong><span>Open candidates</span></div>
          <div class="metric-pill"><strong>23%</strong><span>Interview conversion</span></div>
          <div class="metric-pill"><strong>9</strong><span>Offers in progress</span></div>
        </div>
      </div>

      <div class="kanban">
        ${stages.map((stage) => `
          <div class="kanban-column">
            <div class="column-header">
              <strong>${stage.name}</strong>
              <span class="column-badge">${stage.candidates.length}</span>
            </div>
            ${stage.candidates.length ? stage.candidates.map((candidate) => `
              <div class="candidate-card" data-candidate-id="${candidate.id}">
                <h4>${candidate.name}</h4>
                <p>${candidate.role}</p>
                <div class="candidate-meta">
                  <span class="muted">${candidate.recruiter}</span>
                  <button class="pill-button" type="button" data-move-stage="${candidate.id}">Move</button>
                </div>
              </div>
            `).join('') : '<div class="empty-state">No applicants</div>'}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPerformanceSection() {
  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Performance management</h2>
          <p>Review progress, goals, and manager feedback across review cycles.</p>
        </div>
        <div class="header-actions">
          <button class="secondary-button" type="button">Export reviews</button>
          <button class="primary-button" type="button">New review cycle</button>
        </div>
      </div>

      <div class="card-grid">
        ${appState.performance.map((item) => `
          <div class="panel">
            <div class="chart-header">
              <h3>${item.employee}</h3>
              <span class="pill ${item.status === 'Approved' ? 'success' : 'warning'}">${item.status}</span>
            </div>
            <div class="list-stack">
              <div class="list-item"><span>Cycle</span><strong>${item.cycle}</strong></div>
              <div class="list-item"><span>Progress</span><strong>${item.progress}%</strong></div>
              <div class="list-item"><span>Rating</span><strong>${item.rating}</strong></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderOrganizationSection() {
  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Organization and departments</h2>
          <p>Maintain structure, assigning managers and department governance.</p>
        </div>
        <div class="header-actions">
          <button class="primary-button" type="button">Add department</button>
        </div>
      </div>

      <div class="card-grid">
        <div class="panel org-card">
          <div class="chart-header"><h3>Department leaders</h3></div>
          ${departments.slice(0, 5).map((dept) => `
            <div class="org-row">
              <div class="org-label">
                <span class="dot-status success"></span>
                <div>
                  <strong>${dept}</strong>
                  <div class="muted">Department</div>
                </div>
              </div>
              <span class="pill neutral">Lead assigned</span>
            </div>
          `).join('')}
        </div>

        <div class="panel org-card">
          <div class="chart-header"><h3>Management hierarchy</h3></div>
          <div class="org-row">
            <div class="org-label"><span class="dot-status success"></span><div><strong>Azizbek Karimov</strong><div class="muted">VP People</div></div></div>
            <span class="pill neutral">Board</span>
          </div>
          <div class="org-row">
            <div class="org-label"><span class="dot-status warning"></span><div><strong>Malika Rahimova</strong><div class="muted">HR Manager</div></div></div>
            <span class="pill warning">4 direct reports</span>
          </div>
          <div class="org-row">
            <div class="org-label"><span class="dot-status success"></span><div><strong>Dilshod Xoliqov</strong><div class="muted">Engineering Manager</div></div></div>
            <span class="pill neutral">8 direct reports</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDocumentsSection() {
  return `
    <div class="section-shell">
      <div class="section-header">
        <div>
          <h2>Documents and contracts</h2>
          <p>Review contracts, policy files, certificates, and retention status.</p>
        </div>
        <div class="header-actions">
          <button class="primary-button" type="button">Upload document</button>
        </div>
      </div>

      <div class="panel">
        <table class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Expiry</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${appState.documents.map((doc) => `
              <tr>
                <td>${doc.name}</td>
                <td>${doc.category}</td>
                <td><span class="pill ${doc.status === 'Active' ? 'success' : 'neutral'}">${doc.status}</span></td>
                <td>${doc.expiry}</td>
                <td><button class="table-action" type="button">Open</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function bindEmployeeTableActions() {
  document.querySelectorAll('[data-view-employee]').forEach((button) => {
    button.addEventListener('click', () => {
      const employee = appState.employees.find((item) => item.id === button.dataset.viewEmployee);
      if (!employee) return;
      openModal(renderEmployeeModal(employee));
    });
  });

  document.querySelectorAll('[data-edit-employee]').forEach((button) => {
    button.addEventListener('click', () => {
      const employee = appState.employees.find((item) => item.id === button.dataset.editEmployee);
      if (!employee) return;
      openModal(renderEmployeeForm(employee));
    });
  });

  document.querySelectorAll('[data-delete-employee]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.deleteEmployee;
      appState.employees = appState.employees.filter((employee) => employee.id !== id);
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll('[data-open-employee-form]').forEach((button) => {
    button.addEventListener('click', () => openModal(renderEmployeeForm()));
  });

  const departmentFilter = document.getElementById('employee-department-filter');
  if (departmentFilter) {
    departmentFilter.addEventListener('change', (event) => {
      selectedDepartment = event.target.value;
      renderApp();
    });
  }

  const searchInput = document.getElementById('employee-search');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      filterText = event.target.value.trim().toLowerCase();
      renderApp();
    });
  }
}

function bindLeaveActions() {
  document.querySelectorAll('[data-open-leave-request]').forEach((button) => {
    button.addEventListener('click', () => openModal(renderLeaveForm()));
  });

  document.querySelectorAll('[data-approve-leave]').forEach((button) => {
    button.addEventListener('click', () => {
      const request = appState.leaveRequests.find((item) => item.id === button.dataset.approveLeave);
      if (!request) return;
      request.status = 'Approved';
      saveState();
      renderApp();
    });
  });

  document.querySelectorAll('[data-reject-leave]').forEach((button) => {
    button.addEventListener('click', () => {
      const request = appState.leaveRequests.find((item) => item.id === button.dataset.rejectLeave);
      if (!request) return;
      request.status = 'Rejected';
      saveState();
      renderApp();
    });
  });
}

function bindCandidateActions() {
  document.querySelectorAll('[data-open-candidate-form]').forEach((button) => {
    button.addEventListener('click', () => openModal(renderCandidateForm()));
  });

  document.querySelectorAll('[data-move-stage]').forEach((button) => {
    button.addEventListener('click', () => {
      const candidate = appState.candidates.find((item) => item.id === button.dataset.moveStage);
      if (!candidate) return;
      const order = ['Applied', 'Screening', 'Interview', 'Assessment', 'Offer', 'Hired', 'Rejected'];
      const currentIndex = order.indexOf(candidate.stage);
      const nextStage = order[Math.min(currentIndex + 1, order.length - 1)];
      candidate.stage = nextStage;
      saveState();
      renderApp();
    });
  });
}

function bindProfileActions() {
  const profileButton = document.getElementById('profile-button');
  if (profileButton) {
    profileButton.addEventListener('click', () => {
      openModal(renderProfileModal());
    });
  }
}

function bindModalClose() {
  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => closeModal());
  });
}

function renderEmployeeModal(employee) {
  return `
    <div class="modal-backdrop" data-backdrop>
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h3>${employee.name}</h3>
          <button class="ghost-button" type="button" data-close-modal>Close</button>
        </div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group">
              <label>Employee ID</label>
              <div>${employee.id}</div>
            </div>
            <div class="form-group">
              <label>Department</label>
              <div>${employee.department}</div>
            </div>
            <div class="form-group">
              <label>Job title</label>
              <div>${employee.jobTitle}</div>
            </div>
            <div class="form-group">
              <label>Manager</label>
              <div>${employee.manager}</div>
            </div>
            <div class="form-group">
              <label>Employment type</label>
              <div>${employee.employmentType}</div>
            </div>
            <div class="form-group">
              <label>Status</label>
              <div>${employee.status}</div>
            </div>
            <div class="form-group full">
              <label>Emergency contact</label>
              <div>${employee.emergencyContact}</div>
            </div>
            <div class="form-group full">
              <label>Notes</label>
              <div>${employee.notes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProfileModal() {
  return `
    <div class="modal-backdrop" data-backdrop>
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h3>Profile</h3>
          <button class="ghost-button" type="button" data-close-modal>Close</button>
        </div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group">
              <label>Name</label>
              <input value="${currentUser.name}" />
            </div>
            <div class="form-group">
              <label>Role</label>
              <input value="${currentUser.role}" />
            </div>
            <div class="form-group full">
              <label>Email</label>
              <input value="${currentUser.email}" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="ghost-button" type="button" data-close-modal>Cancel</button>
          <button class="primary-button" type="button">Save changes</button>
          <button class="ghost-button" type="button" id="logout-button">Log out</button>
        </div>
      </div>
    </div>
  `;
}

function renderEmployeeForm(employee = null) {
  const mode = employee ? 'Edit employee' : 'Add employee';
  const firstName = employee ? employee.name.split(' ')[0] : '';
  const lastName = employee ? employee.name.split(' ').slice(1).join(' ') : '';
  const employeeId = employee ? employee.id : '';

  return `
    <div class="modal-backdrop" data-backdrop>
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h3>${mode}</h3>
          <button class="ghost-button" type="button" data-close-modal>Close</button>
        </div>
        <div class="modal-body">
          <form id="employee-form" data-employee-id="${employeeId}">
            <div class="form-grid">
              <div class="form-group">
                <label>First name</label>
                <input name="firstName" value="${firstName}" required />
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input name="lastName" value="${lastName}" required />
              </div>
              <div class="form-group">
                <label>Work email</label>
                <input name="email" type="email" value="${employee ? employee.email : ''}" required />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input name="phone" value="${employee ? employee.phone : ''}" />
              </div>
              <div class="form-group">
                <label>Department</label>
                <select name="department">
                  ${departments.map((dept) => `<option value="${dept}" ${employee && employee.department === dept ? 'selected' : ''}>${dept}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Job title</label>
                <input name="jobTitle" value="${employee ? employee.jobTitle : ''}" />
              </div>
              <div class="form-group">
                <label>Manager</label>
                <input name="manager" value="${employee ? employee.manager : 'Malika Rahimova'}" />
              </div>
              <div class="form-group">
                <label>Office</label>
                <input name="office" value="${employee ? employee.office : 'Remote'}" />
              </div>
              <div class="form-group">
                <label>Salary</label>
                <input name="salary" type="number" value="${employee ? employee.salary : 85000}" />
              </div>
              <div class="form-group">
                <label>Status</label>
                <select name="status">
                  ${['Active', 'Inactive', 'Leave', 'Pending'].map((status) => `<option value="${status}" ${employee && employee.status === status ? 'selected' : ''}>${status}</option>`).join('')}
                </select>
              </div>
              <div class="form-group full">
                <label>Notes</label>
                <textarea name="notes">${employee ? employee.notes : ''}</textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="ghost-button" type="button" data-close-modal>Cancel</button>
          <button class="primary-button" type="button" id="submit-employee-form">Save</button>
        </div>
      </div>
    </div>
  `;
}

function renderLeaveForm() {
  return `
    <div class="modal-backdrop" data-backdrop>
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h3>Leave request</h3>
          <button class="ghost-button" type="button" data-close-modal>Close</button>
        </div>
        <div class="modal-body">
          <form id="leave-form">
            <div class="form-grid">
              <div class="form-group">
                <label>Employee</label>
                <select name="employee">
                  ${appState.employees.map((employee) => `<option value="${employee.name}">${employee.name}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Leave type</label>
                <select name="type">
                  <option>Annual leave</option>
                  <option>Sick leave</option>
                  <option>Unpaid leave</option>
                  <option>Personal leave</option>
                </select>
              </div>
              <div class="form-group">
                <label>Start date</label>
                <input name="startDate" type="date" />
              </div>
              <div class="form-group">
                <label>End date</label>
                <input name="endDate" type="date" />
              </div>
              <div class="form-group full">
                <label>Reason</label>
                <textarea name="reason">Family travel and rest.</textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="ghost-button" type="button" data-close-modal>Cancel</button>
          <button class="primary-button" type="button" id="submit-leave-form">Submit request</button>
        </div>
      </div>
    </div>
  `;
}

function renderCandidateForm() {
  return `
    <div class="modal-backdrop" data-backdrop>
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <h3>New candidate</h3>
          <button class="ghost-button" type="button" data-close-modal>Close</button>
        </div>
        <div class="modal-body">
          <form id="candidate-form">
            <div class="form-grid">
              <div class="form-group">
                <label>Candidate name</label>
                <input name="name" />
              </div>
              <div class="form-group">
                <label>Role</label>
                <input name="role" />
              </div>
              <div class="form-group">
                <label>Recruiter</label>
                <input name="recruiter" value="Malika Rahimova" />
              </div>
              <div class="form-group">
                <label>Stage</label>
                <select name="stage">
                  <option>Applied</option>
                  <option>Screening</option>
                  <option>Interview</option>
                  <option>Assessment</option>
                  <option>Offer</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="ghost-button" type="button" data-close-modal>Cancel</button>
          <button class="primary-button" type="button" id="submit-candidate-form">Save candidate</button>
        </div>
      </div>
    </div>
  `;
}

function openModal(content) {
  const root = document.getElementById('modal-root');
  root.innerHTML = content;

  const backdrop = root.querySelector('[data-backdrop]');
  if (backdrop) {
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) {
        closeModal();
      }
    });
  }

  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', logoutUser);
  }

  const employeeForm = document.getElementById('employee-form');
  if (employeeForm && document.getElementById('submit-employee-form')) {
    document.getElementById('submit-employee-form').addEventListener('click', () => {
      const formData = new FormData(employeeForm);
      const employeePayload = {
        id: employeeForm.dataset.employeeId || `EMP-${Math.floor(Math.random() * 9000 + 1000)}`,
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email'),
        phone: formData.get('phone'),
        department: formData.get('department'),
        jobTitle: formData.get('jobTitle'),
        manager: formData.get('manager'),
        office: formData.get('office'),
        salary: Number(formData.get('salary') || 0),
        status: formData.get('status'),
        notes: formData.get('notes'),
        photo: `${formData.get('firstName').toString()[0]}${formData.get('lastName').toString()[0]}`.toUpperCase(),
        isArchived: false,
      };

      const id = employeePayload.id;
      const existing = appState.employees.find((employee) => employee.id === id);
      if (existing) {
        Object.assign(existing, employeePayload);
      } else {
        appState.employees.unshift(employeePayload);
      }
      saveState();
      closeModal();
      renderApp();
    });
  }

  const leaveForm = document.getElementById('leave-form');
  if (leaveForm && document.getElementById('submit-leave-form')) {
    document.getElementById('submit-leave-form').addEventListener('click', () => {
      const formData = new FormData(leaveForm);
      const startDate = formData.get('startDate');
      const endDate = formData.get('endDate');
      appState.leaveRequests.unshift({
        id: `LV-${Math.floor(Math.random() * 9000 + 1000)}`,
        employee: formData.get('employee'),
        type: formData.get('type'),
        dates: `${startDate} to ${endDate}`,
        status: 'Pending',
        manager: currentUser.role === 'Employee' ? 'Dilshod Xoliqov' : 'Malika Rahimova',
        reason: formData.get('reason'),
      });
      saveState();
      closeModal();
      renderApp();
    });
  }

  const candidateForm = document.getElementById('candidate-form');
  if (candidateForm && document.getElementById('submit-candidate-form')) {
    document.getElementById('submit-candidate-form').addEventListener('click', () => {
      const formData = new FormData(candidateForm);
      const candidate = {
        id: `CAN-${Math.floor(Math.random() * 9000 + 1000)}`,
        name: formData.get('name'),
        stage: formData.get('stage'),
        role: formData.get('role'),
        recruiter: formData.get('recruiter'),
      };
      appState.candidates.unshift(candidate);
      saveState();
      closeModal();
      renderApp();
    });
  }
}

function closeModal() {
  document.getElementById('modal-root').innerHTML = '';
}

function initializeEvents() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;
      if (loginUser(email, password)) {
        showAppScreen();
      } else {
        alert('Invalid email or password. Try one of the demo accounts.');
      }
    });
  }

  document.querySelectorAll('.demo-role').forEach((button) => {
    button.addEventListener('click', () => {
      const role = button.dataset.role;
      const entry = Object.entries(demoUsers).find(([, user]) => user.role === role);
      if (!entry) return;
      const [email, user] = entry;
      document.getElementById('login-email').value = email;
      document.getElementById('login-password').value = user.password;
      loginUser(email, user.password);
      showAppScreen();
    });
  });
}

loadStateFromStorage();
currentUser = appState.user || null;
initializeEvents();
if (currentUser) {
  showAppScreen();
} else {
  showLoginScreen();
}
