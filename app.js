const sections = [
{id:"basics",title:"1. Business idea and starting points",description:"Start with the purpose of the plan and a clear explanation of the business idea.",fields:[
{id:"purpose",label:"What is this business plan for?",type:"select",required:true,options:["Preparing for a Starttiraha application","Planning to establish a new company","Preparing for Finnvera or another lender","Developing an existing business","Other purpose"]},
{id:"stage",label:"What stage is the business at?",type:"select",required:true,options:["Business idea only","Preparing before launch","Registered but not yet operating","Operating part-time","Operating full-time","Developing or expanding an existing business"]},
{id:"businessName",label:"Proposed or registered business name",type:"text"},
{id:"companyForm",label:"What legal form are you considering?",type:"select",required:true,options:["Toiminimi (private trader / sole proprietorship)","Osakeyhtiö (Oy / limited liability company)","Partnership or limited partnership","Co-operative","Not decided yet","Other"]},
{id:"location",label:"Where will the business operate?",type:"text",required:true,hint:"City or region, online, nationwide, or several locations."},
{id:"industry",label:"What industry or field is it in?",type:"text",required:true,hint:"For example, cleaning, restaurant, IT, retail or consulting."},
{id:"startDate",label:"When do you plan to start?",type:"text",hint:"Approximate date or period, if known."},
{id:"summary",label:"Describe your business idea simply: what will you do, for whom, and how?",type:"textarea",required:true,hint:"Imagine explaining the idea to someone who has never heard of it."},
{id:"motivation",label:"Why do you want to start or develop this business? Where did the idea come from?",type:"textarea"},
{id:"goals",label:"What are your main goals, and how do you imagine the business developing over time?",type:"textarea",hint:"Describe your direction and ambitions, not financial forecasts."},
{id:"hirePlanChoice",label:"Do you plan to employ people?",type:"select",required:true,options:["Yes, from the beginning","Yes, later if the business develops","No employees planned","Not sure yet"]}
]},
{id:"founder",title:"2. Entrepreneur skills and readiness",description:"Explain why you or your team are prepared to run the business and how you will address any gaps.",fields:[
{id:"founderProfile",label:"Who will establish and run the business? Describe relevant experience, education and skills.",type:"textarea",required:true,hint:"Include employment, industry experience, qualifications, languages and practical skills."},
{id:"skills",label:"Which skills do you or your team already have?",type:"checkboxes",options:["Practical entrepreneurship","Industry knowledge","Relevant laws and rules","Financial administration","Marketing","Sales","Management and personnel administration","Customer service","Technical or professional skills"]},
{id:"readiness",label:"What have you already done to prepare?",type:"textarea",required:true,hint:"Research, training, customer discussions, testing, supplier contact, permits or other preparation."},
{id:"gaps",label:"What skills or knowledge are missing, and how will you obtain them?",type:"textarea",hint:"Training, mentoring, hiring, subcontracting, professional advice or partnerships."},
{id:"accounting",label:"How will you organise invoicing, bookkeeping, expense records and financial administration?",type:"textarea"},
{id:"responsibilities",label:"If there are co-founders or key people, how will responsibilities be divided?",type:"textarea"}
]},
{id:"offer",title:"3. Products, services and customer value",description:"Explain what customers will receive, what need you meet and why your offer may be competitive.",fields:[
{id:"products",label:"What products or services will you offer?",type:"textarea",required:true,hint:"Name each main offer and explain what the customer receives."},
{id:"pricingApproach",label:"How will the offer be priced?",type:"textarea",hint:"Describe the pricing approach only, such as hourly, fixed package, per item or subscription. Do not calculate costs or forecasts."},
{id:"customerNeed",label:"What customer need or problem does your offer address?",type:"textarea",required:true},
{id:"advantages",label:"Which features could make your offer attractive compared with alternatives?",type:"checkboxes",options:["Price","Quality","Value for money","Availability or convenience","Delivery speed","Location","Uniqueness or specialisation","Customer experience","Brand awareness","Responsibility or environmental impact","Clear terms and conditions"]},
{id:"competitiveEvidence",label:"How does your offer compare with alternatives, and what evidence supports your view?",type:"textarea",hint:"Be realistic. Separate evidence from assumptions."},
{id:"deliveryMethod",label:"How and where will customers receive the product or service?",type:"textarea"},
{id:"intellectualProperty",label:"Are trademarks, designs, patents or other intellectual-property rights relevant?",type:"textarea",hint:"If unsure, say what you need to check."}
]},
{id:"market",title:"4. Customers, market and competitors",description:"Show that you understand the customers you want to serve and the market you are entering.",fields:[
{id:"customers",label:"Who are your target customers, and what do they need?",type:"textarea",required:true,hint:"Describe customer groups, location, typical needs and buying behaviour."},
{id:"demandEvidence",label:"What evidence suggests there is demand for your offer?",type:"textarea",hint:"Customer interviews, enquiries, pilot sales, public statistics, observations or industry research."},
{id:"marketArea",label:"What geographical area or online market will you serve?",type:"textarea"},
{id:"competitors",label:"Who are your main competitors or alternatives, and what do they offer?",type:"textarea",required:true},
{id:"positioning",label:"How will your business stand out in this market?",type:"textarea"},
{id:"partners",label:"What partners, suppliers or professional networks may be important?",type:"textarea"},
{id:"marketGaps",label:"What market assumptions or questions still need to be checked?",type:"textarea"}
]},
{id:"marketing",title:"5. Marketing and customer acquisition",description:"Explain how potential customers will discover your business and why your chosen methods fit them.",fields:[
{id:"marketingChannels",label:"Which marketing channels do you plan to use?",type:"checkboxes",options:["Social media","Website","Paid search or social advertising","Email marketing","Community platforms","Influencer marketing","Traditional media","Signs, flyers or brochures","Events and partnerships","Own networks and referrals","Other"]},
{id:"marketingPlan",label:"Why are these channels suitable for your target customers, and how will you use them?",type:"textarea",required:true},
{id:"brandImage",label:"What brand image or reputation do you want to build?",type:"textarea"},
{id:"marketingReview",label:"How will you review whether marketing is working?",type:"textarea",hint:"For example, enquiries, website visits, referrals or customer feedback; no financial calculations needed."},
{id:"marketingOwner",label:"Who will be responsible for marketing and creating content?",type:"textarea"}
]},
{id:"sales",title:"6. Sales and customer relationships",description:"Describe how interested people become customers and how you will keep their trust.",fields:[
{id:"salesChannels",label:"Where or how will customers buy from you?",type:"checkboxes",options:["Own website","Own online store","Third-party online platform","Social media","Business premises or shop","Retailer or partner","Events or pop-up","Direct contact","Other"]},
{id:"salesProcess",label:"Describe the sales process from first contact to purchase and delivery.",type:"textarea",required:true,hint:"For example, enquiry, consultation, quote, agreement, delivery and follow-up."},
{id:"salesOwner",label:"Who will handle sales and customer service?",type:"textarea"},
{id:"retention",label:"How will you build trust, encourage repeat business and earn referrals?",type:"textarea"}
]},
{id:"operations",title:"7. Operations, rules and responsibility",description:"Describe how the business will work day to day and what requirements you need to verify.",fields:[
{id:"workflow",label:"What are the main steps in delivering your product or service?",type:"textarea",required:true},
{id:"resources",label:"What premises, equipment, software, materials or suppliers will you need?",type:"textarea"},
{id:"compliance",label:"What permits, notifications, registrations, qualifications or industry rules may apply in Finland?",type:"textarea",hint:"List what you believe applies and what you need to verify with the relevant authority or professional adviser."},
{id:"insurance",label:"What insurance or other protection should you investigate?",type:"textarea"},
{id:"responsibilityPlan",label:"How will your business act responsibly towards customers, workers, society or the environment?",type:"textarea",hint:"Consider relevant safety, data protection, accessibility, environmental or ethical practices."}
]},
{id:"risks",title:"8. Risks and SWOT analysis",description:"Identify challenges realistically and explain how you would respond.",fields:[
{id:"riskTypes",label:"Which risks could affect your business?",type:"checkboxes",options:["Economic conditions or market cycles","Supplier costs or disruptions","Demand differs from expectations","Industry or technology changes","Legislation or permit changes","Competition increases","Customer needs change","Recruitment or staff skills","Sales or customer acquisition is difficult","Work-life balance or illness","Other"]},
{id:"mainRisks",label:"What are your most important risks, and how might they affect the business?",type:"textarea",required:true},
{id:"riskPlan",label:"How will you reduce risks or respond if something goes wrong?",type:"textarea"},
{id:"strengths",label:"SWOT — What are your internal strengths?",type:"textarea",hint:"Skills, experience, relationships or other advantages you already have."},
{id:"weaknesses",label:"SWOT — What are your internal weaknesses?",type:"textarea",hint:"Areas where you lack experience, capacity or resources."},
{id:"opportunities",label:"SWOT — What external opportunities could help the business?",type:"textarea"},
{id:"threats",label:"SWOT — What external threats could harm the business?",type:"textarea"}
]},
{id:"routine",title:"9. Entrepreneur routine and wellbeing",description:"Consider the time, personal arrangements and wellbeing needed to run the business sustainably.",fields:[
{id:"personalLivelihood",label:"How will you plan for your personal livelihood while developing the business?",type:"textarea",hint:"Describe your approach in words. Prepare personal and business calculations separately if needed."},
{id:"workingWeek",label:"What will a typical working week look like?",type:"textarea",hint:"Consider customer work, administration, sales, marketing and rest."},
{id:"holidays",label:"How will you plan holidays, days off or unexpected absences?",type:"textarea"},
{id:"wellbeing",label:"How will you maintain your health, wellbeing and ability to continue working?",type:"textarea"}
]},
{id:"employer",title:"10. Employer planning",description:"Complete this section if you expect to employ people. Otherwise, you can skip it.",condition:"employer",fields:[
{id:"staffNeeds",label:"What staff will you need, for which roles and at what stage?",type:"textarea"},
{id:"recruitment",label:"How will you recruit suitable people?",type:"textarea"},
{id:"supervision",label:"What experience or support prepares you to supervise employees?",type:"textarea"},
{id:"orientation",label:"How will you orient new employees and explain duties and safety practices?",type:"textarea"},
{id:"staffWellbeing",label:"How will you support staff wellbeing, skills development and job satisfaction?",type:"textarea"}
]},
{id:"future",title:"11. Future development, vision and values",description:"Explain how the business may develop and what principles will guide it.",fields:[
{id:"industryTrends",label:"What trends or changes could affect your industry in the next few years?",type:"textarea"},
{id:"futureCustomers",label:"How might your customers and their needs change over time?",type:"textarea"},
{id:"development",label:"How will you keep your products or services relevant and improve them?",type:"textarea"},
{id:"vision",label:"What would you like the company to look like in about five years, and how might you get there?",type:"textarea"},
{id:"values",label:"What values matter to the company, and how will they guide everyday decisions?",type:"textarea"}
]},
{id:"next",title:"12. Next steps and funding purpose",description:"Turn your ideas into actions. Any application-specific questions will appear based on your selected purpose.",fields:[
{id:"milestones",label:"What actions must be completed before launch and during the first stage?",type:"textarea",required:true,hint:"List actions in a sensible order, with target dates if known."},
{id:"supportNeeded",label:"What questions, advice or support do you still need?",type:"textarea"},
{id:"fundingUse",label:"If seeking funding, what business purpose would the funding serve?",type:"textarea",hint:"Describe the purpose and rationale, not amounts, forecasts or repayment calculations."}
]},
{id:"starttiraha",title:"Additional questions — Starttiraha preparation",description:"These prompts help organise information for application preparation. Check current official instructions and timing with the relevant authority.",condition:"starttiraha",fields:[
{id:"fullTimePlan",label:"Do you plan to work full-time in the business? Explain the intended arrangement.",type:"textarea"},
{id:"startTiming",label:"Have you already started full-time business activity, or are you still preparing? Include dates if known.",type:"textarea",hint:"Be accurate about your actual status. Verify current application timing rules before starting full-time activity."},
{id:"livelihoodPlan",label:"How do you plan to support yourself during the initial stage of entrepreneurship?",type:"textarea",hint:"Describe your plan in words; prepare calculations separately if required."}
]},
{id:"lender",title:"Additional questions — Finnvera or lender preparation",description:"Focus on the business rationale and readiness. Detailed financial forecasts must be prepared separately.",condition:"lender",fields:[
{id:"fundingNeed",label:"What business need or development goal makes external financing relevant?",type:"textarea"},
{id:"fundingAlternatives",label:"What alternatives have you considered, and why might financing be appropriate?",type:"textarea"},
{id:"repaymentBasis",label:"What operational factors could help the business meet its obligations?",type:"textarea",hint:"Describe customers, experience, contracts, delivery capability and risk controls. Do not calculate repayment capacity here."}
]}
];

const STORAGE_KEY = "kfbiz-business-plan-v1";
// Publishable keys are designed for browser use. Database permissions are enforced by RLS.
// Never place a Supabase secret/service-role key in this file.
const SUPABASE_URL = "https://wtkvxytoqrpnssfcobky.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_qzvUQZmQLcAyyeH9SvcqbA_KDmrTO7X";
const SUBMISSIONS_ENDPOINT = SUPABASE_URL + "/rest/v1/business_plan_submissions";
let answers = {};
let current = 0;
try { answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {}; } catch (_) { answers = {}; }
const panel = document.getElementById("questionPanel");
const reviewPanel = document.getElementById("reviewPanel");
const reviewContent = document.getElementById("reviewContent");
const statusEl = document.getElementById("status");
function escapeHtml(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function visibleSections(){return sections.filter(s=>!s.condition||(s.condition==="starttiraha"&&String(answers.purpose||"").toLowerCase().includes("starttiraha"))||(s.condition==="lender"&&/finnvera|lender/i.test(String(answers.purpose||"")))||(s.condition==="employer"&&/yes/i.test(String(answers.hirePlanChoice||""))));}
function allVisibleFields(){return visibleSections().flatMap(s=>s.fields);}
function setAnswer(id,value){answers[id]=value;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(answers));}catch(_){} updateProgress();}
function readField(field){if(field.type==="checkboxes")return Array.isArray(answers[field.id])?answers[field.id]:[];return answers[field.id]||"";}
function renderField(field){
 const value=readField(field), required=field.required?' required':'';
 let control="";
 if(field.type==="select"){control='<select id="'+field.id+'" name="'+field.id+'"'+required+'><option value="">Choose one</option>'+field.options.map(opt=>'<option value="'+escapeHtml(opt)+'"'+(value===opt?' selected':'')+'>'+escapeHtml(opt)+'</option>').join("")+'</select>';}
 else if(field.type==="checkboxes"){control='<div class="checks">'+field.options.map(opt=>'<label class="check"><input type="checkbox" name="'+field.id+'" value="'+escapeHtml(opt)+'"'+(value.includes(opt)?' checked':'')+'> '+escapeHtml(opt)+'</label>').join("")+'</div>';}
 else if(field.type==="textarea"){control='<textarea id="'+field.id+'" name="'+field.id+'"'+required+' placeholder="'+escapeHtml(field.placeholder||"Write your answer here...")+'">'+escapeHtml(value)+'</textarea>';}
 else {control='<input id="'+field.id+'" name="'+field.id+'" type="text"'+required+' value="'+escapeHtml(value)+'" placeholder="'+escapeHtml(field.placeholder||"Write your answer here...")+'">';}
 return '<div class="field'+(field.type==="checkboxes"||field.type==="textarea"?' full':'')+'"><label for="'+field.id+'">'+escapeHtml(field.label)+(field.required?' *':'')+'</label>'+control+(field.hint?'<div class="hint">'+escapeHtml(field.hint)+'</div>':'')+'</div>';
}
function updateProgress(){
 const fields=allVisibleFields();let completed=0;
 fields.forEach(f=>{const v=readField(f);if((Array.isArray(v)&&v.length)||(!Array.isArray(v)&&String(v).trim()))completed++;});
 document.getElementById("answeredLabel").textContent=completed+" of "+fields.length+" questions answered";
 const visible=visibleSections();document.getElementById("progressBar").style.width=((visible.length?Math.min(current+1,visible.length)/visible.length:0)*100)+"%";
}
function saveVisibleInputs(){
 const form=panel.querySelector("form");if(!form)return;
 const data=new FormData(form);
 for(const field of visibleSections()[current].fields){
  if(field.type==="checkboxes"){answers[field.id]=data.getAll(field.id);}
  else {const el=form.elements[field.id];if(el)answers[field.id]=el.value;}
 }
 try{localStorage.setItem(STORAGE_KEY,JSON.stringify(answers));}catch(_){}
}
function render(){
 const list=visibleSections();if(current>=list.length)current=list.length-1;if(current<0)current=0;
 const section=list[current];document.getElementById("stepLabel").textContent="Section "+(current+1)+" of "+list.length;
 panel.classList.remove("hidden");reviewPanel.classList.add("hidden");
 panel.innerHTML='<h2>'+escapeHtml(section.title)+'</h2><p class="description">'+escapeHtml(section.description)+'</p><form id="sectionForm"><div class="fields">'+section.fields.map(renderField).join("")+'</div><div class="actions"><button type="button" class="secondary" id="backBtn"'+(current===0?' disabled':'')+'>Back</button><button type="button" class="primary" id="nextBtn">'+(current===list.length-1?'Review answers':'Save and continue')+'</button><button type="button" class="secondary" id="saveBtn">Save progress</button></div></form>';
 const form=panel.querySelector("form");
 form.addEventListener("input",e=>{const t=e.target;if(!t.name)return;const field=section.fields.find(f=>f.id===t.name);if(field&&field.type==="checkboxes"){answers[t.name]=[...form.querySelectorAll('input[name="'+t.name+'"]:checked')].map(el=>el.value);}else{answers[t.name]=t.value;}try{localStorage.setItem(STORAGE_KEY,JSON.stringify(answers));}catch(_){} updateProgress();if(t.name==="purpose"||t.name==="hirePlanChoice"){const oldId=section.id;const oldIndex=current;const newList=visibleSections();current=Math.min(oldIndex,newList.length-1);render();}});
 form.addEventListener("change",e=>{const t=e.target;if(!t.name)return;const field=section.fields.find(f=>f.id===t.name);if(field&&field.type==="checkboxes")setAnswer(t.name,[...form.querySelectorAll('input[name="'+t.name+'"]:checked')].map(el=>el.value));else setAnswer(t.name,t.value);if(t.name==="purpose"||t.name==="hirePlanChoice")render();});
 document.getElementById("backBtn").addEventListener("click",()=>{saveVisibleInputs();current=Math.max(0,current-1);render();});
 document.getElementById("nextBtn").addEventListener("click",()=>{saveVisibleInputs();const active=visibleSections()[current];for(const field of active.fields){if(field.required){const val=readField(field);if(!(Array.isArray(val)?val.length:String(val).trim())){const el=form.elements[field.id];if(el&&el.focus)el.focus();statusEl.textContent="Please answer the required question: "+field.label;return;}}}statusEl.textContent="";if(current<visibleSections().length-1){current++;render();}else showReview();});
 document.getElementById("saveBtn").addEventListener("click",()=>{saveVisibleInputs();statusEl.textContent="Progress saved in this browser on this device.";});
 updateProgress();
}
function showReview(){
 saveVisibleInputs();panel.classList.add("hidden");reviewPanel.classList.remove("hidden");document.getElementById("stepLabel").textContent="Review";document.getElementById("progressBar").style.width="100%";
 const list=visibleSections();reviewContent.innerHTML=list.map(section=>{const rows=section.fields.map(f=>{const value=readField(f);const text=Array.isArray(value)?value.join(", "):String(value||"").trim();return text?'<div class="review-section"><strong>'+escapeHtml(f.label)+'</strong><p class="review-answer">'+escapeHtml(text)+'</p></div>':""}).join("");return rows?'<section><h3>'+escapeHtml(section.title)+'</h3>'+rows+'</section>':""}).join("")||"<p>No answers entered yet.</p>";
}
function markdownDraft(){
 const list=visibleSections();let out="# Business Plan Draft\n\n**Prepared using:** KF Biz Interactive Business Plan Creator\n\n**Purpose:** "+(answers.purpose||"Not specified")+"\n\n**Prepared:** "+new Date().toLocaleDateString()+"\n\n> Working draft only. Verify facts, support market claims with evidence, and check current requirements with the relevant authority or lender. Financial calculations are not included and must be prepared separately if required.\n";
 list.forEach(section=>{const rows=section.fields.map(f=>{const value=readField(f);const text=Array.isArray(value)?value.join(", "):String(value||"").trim();return text?{label:f.label,value:text}:null;}).filter(Boolean);if(rows.length){out+="\n## "+section.title+"\n\n";rows.forEach(r=>{out+="### "+r.label+"\n\n"+r.value+"\n\n";});}});
 out+="\n## Financial work to prepare separately\n\nThis tool does not calculate revenue forecasts, costs, profitability, cash flow, break-even or loan repayment capacity. Prepare separate financial forecasts and supporting documents if required.\n\n## Final review checklist\n\n- [ ] Verify market claims and include sources or evidence.\n- [ ] Confirm relevant permits, registrations, insurance and industry-specific obligations.\n- [ ] Check current official Starttiraha instructions and application timing if relevant.\n- [ ] Prepare separate financial forecasts and supporting documents if required.\n- [ ] Check that the plan is realistic, accurate and consistent before submission.\n\n*Starttiraha and financing decisions are made by the relevant authority or lender. This draft does not guarantee eligibility or approval.*\n";
 return out;
}
function downloadDraft(){const blob=new Blob([markdownDraft()],{type:"text/markdown;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="kf-biz-business-plan-draft.md";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);statusEl.textContent="Your business-plan draft download should now be available.";}

const submissionForm = document.getElementById("submissionForm");
submissionForm.addEventListener("submit", async (event) => {
 event.preventDefault();
 statusEl.textContent = "";
 if (!submissionForm.reportValidity()) return;
 const submitButton = document.getElementById("submitToKfBizBtn");
 const name = document.getElementById("clientName").value.trim();
 const email = document.getElementById("clientEmail").value.trim();
 const consent = document.getElementById("submissionConsent").checked;
 if (!name || !email || !consent) {
  statusEl.textContent = "Please enter your name and email address and agree to the privacy notice.";
  return;
 }
 if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
  statusEl.textContent = "Please enter a valid email address.";
  return;
 }
 const originalText = submitButton.textContent;
 submitButton.disabled = true;
 submitButton.textContent = "Submitting…";
 try {
  const payload = {
   client_name: name,
   client_email: email,
   answers: answers,
   consented_at: new Date().toISOString(),
   source: "KF Biz Interactive Business Plan Creator"
  };
  const response = await fetch(SUBMISSIONS_ENDPOINT, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    "apikey": SUPABASE_PUBLISHABLE_KEY,
    "Authorization": "Bearer " + SUPABASE_PUBLISHABLE_KEY,
    "Prefer": "return=minimal"
   },
   body: JSON.stringify(payload)
  });
  if (!response.ok) {
   let detail = "";
   try { detail = (await response.json()).message || ""; } catch (_) {}
   throw new Error(detail || "The database did not accept the submission (HTTP " + response.status + ").");
  }
  statusEl.textContent = "Your answers have been submitted to KF Biz. You may also download a copy below.";
  submitButton.textContent = "Submitted successfully";
 } catch (error) {
  console.error("KF Biz submission failed:", error);
  statusEl.textContent = "Submission failed. Your answers remain in this browser. Please try again later or download the draft and contact KF Biz. " + (error && error.message ? error.message : "");
  submitButton.disabled = false;
  submitButton.textContent = originalText;
 }
});

document.getElementById("editBtn").addEventListener("click",()=>{current=0;render();statusEl.textContent="";});
document.getElementById("reviewDownloadBtn").addEventListener("click",downloadDraft);
document.getElementById("reviewPrintBtn").addEventListener("click",()=>window.print());
render();