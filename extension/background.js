"use strict";(()=>{var t=[{id:1,title:"Task 1",done:!0,priority:"HIGH",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),dueDate:new Date("2024-03-25").toISOString()},{id:2,title:"Task 2",done:!1,priority:"MEDIUM",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),dueDate:new Date("2024-05-01").toISOString()}];chrome.storage.sync.set({tasks:t});})();
