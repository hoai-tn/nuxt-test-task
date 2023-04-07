<template>
  <div>
    <div id="app" class="wrapper">
      <div class="flex flex-col items-center justify-center p-3">
        <button
          @click="onToggle"
          class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
        >
          Open
        </button>
      </div>
      <div
        v-if="isModalVisible"
        class="p-4 fixed inset-0 overflow-y-scroll inset-0"
      >
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 inset-0 z-0 min-h-[1300px] h-auto"
        ></div>
        <div
          class="w-full max-w-[1680px] h-[1200px] p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white p-4"
        >
          <div class="md:flex md:justify-between">
            <div class="flex gap-2">
              <img
                src="~/assets/img/arrow-left.svg"
                alt="close"
                class="cursor-pointer"
              />

              <h3 class="text-[28px] font-semibold">Resume Builder</h3>
            </div>
            <div @click="onToggle" class="cursor-pointer">
              <img src="~/assets/img/close.svg" alt="close" />
            </div>
          </div>
          <div>
            <div class="lg:flex justify-between gap-x-[30px] mt-[30px]">
              <!-- col-1 -->
              <div
                class="max-w-[378px] w-[378px] h-[1100px] border flex-row items-between p-[20px] rounded-[12px]"
              >
                <ul>
                  <li class="flex justify-between border-b pb-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Personal Info</span
                      >
                    </div>
                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Skills</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Work Experience</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Education</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Career Objective</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Certifications & Licenses</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Awards & Honors</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Volunteer Experience</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                  <li class="flex justify-between border-b py-[20px]">
                    <div class="flex items-center">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                      </label>
                      <span class="ml-3 text-[20px] font-medium text-gray-900"
                        >Social Network</span
                      >
                    </div>

                    <img src="~/assets/img/move.svg" alt="move" />
                  </li>
                </ul>
                <div class="mt-[250px]">
                  <button
                    class="w-full bg-[#ECEFF1] text-black font-bold mb-[24px] py-2 px-4 rounded-full"
                  >
                    Add Custom Section
                  </button>
                  <hr />
                  <button
                    class="w-full bg-[#12131F] text-white font-bold my-[24px] py-2 px-4 rounded-full"
                  >
                    Import Resume
                  </button>
                  <button
                    class="w-full bg-[#ECEFF1] text-black font-bold py-2 px-4 rounded-full"
                  >
                    Change Template
                  </button>
                </div>
              </div>
              <!-- col-2 -->

              <div
                class="max-w-[825px] w-[825px] h-[1100px] border p-[20px] rounded-[12px]"
              >
                <div class="bg-[#F4F7F8] p-[12px]">
                  <div><img src="~/assets/img/user.png" /></div>
                  <h3
                    class="text-[20px] font-medium text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Personal Info
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li class="border-r border-[#CFD8DC] pr-[16px]">Name</li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">Email</li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      Phone Number
                    </li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">Address</li>
                    <li>Photo</li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Skills
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li class="border-r border-[#CFD8DC] pr-[16px]">Skill</li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      Education
                    </li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Education
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      School/Institute
                    </li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      Field of Study
                    </li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">Degree</li>
                    <li class="pr-[16px]">Summary</li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Work Experience
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      Company Name
                    </li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      Location
                    </li>
                    <li class="border-r border-[#CFD8DC] pr-[16px]">
                      Designation
                    </li>
                    <li>Duration</li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Career Objective
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li>A short summary to outline your professional goals</li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Certifications & Licenses
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li>
                      Highlight your certificates, and licenses for the training
                      you have undertaken in your career
                    </li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Awards & Honors
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li>
                      Highlight your awards, and honors for the training you
                      have received in your career
                    </li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Volunteer Experience
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li>
                      Showcase your community-minded and professional mind
                    </li>
                  </ul>
                </div>
                <div class="mt-[30px]">
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Social Networks
                  </h3>
                  <ul class="flex gap-x-[16px] mt-[6px]">
                    <li>Deliver insight into your strong online presence.</li>
                  </ul>
                </div>
                <div
                  class="flex justify-between border-t border-[#CFD8DC] mt-[60px] pt-[30px]"
                >
                  <div class="flex gap-[20px]">
                    <img src="~/assets/img/fb.svg" />
                    <img src="~/assets/img/twiter.svg" />
                    <img src="~/assets/img/in.svg" />
                    <img src="~/assets/img/share.svg" />
                  </div>
                  <div>
                    <button
                      class="bg-[#12131F] text-white font-medium py-2 px-4 rounded-full"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <!-- col-3-->
              <div
                class="max-w-[378px] w-[378px] min-h-[1100px] h-auto border p-[20px] rounded-[12px]"
              >
                <div>
                  <h3
                    class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px]"
                  >
                    Personal Info
                  </h3>
                </div>
                <div class="flex items-center mt-3 gap-4 w-full">
                  <label for="dropzone-file">
                    <div>
                      <img src="~/assets/img/user1.png" />
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                  <h3 class="text-[20px] font-medium">Personal Info</h3>
                </div>
                <div>
                  <form>
                    <div>
                      <label
                        for="default-input"
                        class="block mb-1 font-medium mt-[5px]"
                        >Name</label
                      >
                      <input
                        type="text"
                        id="default-input"
                        class="w-full border-[#CFD8DC] rounded"
                      />
                    </div>
                    <div>
                      <label
                        for="default-input"
                        class="block mb-1 font-medium mt-[5px]"
                        >Email</label
                      >
                      <input
                        type="text"
                        id="default-input"
                        class="w-full border-[#CFD8DC] rounded"
                      />
                    </div>
                    <div>
                      <label
                        for="default-input"
                        class="block mb-1 font-medium mt-[5px]"
                        >Phone</label
                      >
                      <input
                        type="text"
                        id="default-input"
                        class="w-full border-[#CFD8DC] rounded"
                      />
                    </div>
                    <div>
                      <label
                        for="default-input"
                        class="block mb-1 font-medium mt-[5px]"
                        >Address</label
                      >
                      <input
                        type="text"
                        id="default-input"
                        class="w-full border-[#CFD8DC] rounded h-[68px]"
                      />
                    </div>
                    <h3
                      class="text-[20px] font-medium border-b border-[#CFD8DC] pb-[6px] mt-[10px]"
                    >
                      Preview
                    </h3>
                    <div
                      class="flex gap-2 border border-[#CFD8DC] p-[15px] rounded mt-4"
                    >
                      <img src="~/assets/img/employee.svg" />
                      <p>
                        Hey John how would you like to customize the personal
                        info
                      </p>
                    </div>
                    <div class="mt-2">
                      <img
                        src="~/assets/img/user.png"
                        width="32"
                        class="ml-[45px]"
                      />
                    </div>
                    <div>
                      <div class="flex items-center mb-4 mt-1">
                        <input
                          id="disabled-radio-1"
                          type="radio"
                          value=""
                          name="disabled-radio"
                          class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg- dark:border-gray-600 checked:bg-black"
                        />
                        <label
                          for="disabled-radio-1"
                          class="w-full ml-2 text-[16px] text-[#12131F] font-medium border-b border-[#CFD8DC]"
                          >Susan Singh</label
                        >
                      </div>
                      <p class="ml-[23px]">
                        susan.smith@gmail.com| +1956523586 | Cambridge,MA 02139,
                        United States
                      </p>
                    </div>
                    <div class="mt-2">
                      <img
                        class="mx-auto"
                        src="~/assets/img/user.png"
                        width="32"
                      />
                    </div>
                    <div>
                      <div class="flex items-center mb-4 mt-1">
                        <input
                          id="disabled-radio-1"
                          type="radio"
                          value=""
                          name="disabled-radio"
                          class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg- dark:border-gray-600 checked:bg-black"
                        />
                        <label
                          for="disabled-radio-1"
                          class="w-full ml-2 text-[16px] text-[#12131F] font-medium border-b border-[#CFD8DC] text-center"
                          >Susan Singh</label
                        >
                      </div>
                      <p class="ml-[23px] text-center">
                        susan.smith@gmail.com| +1956523586 | Cambridge,MA 02139,
                        United States
                      </p>
                    </div>
                    <div class="mt-2">
                      <img
                        class="ml-auto"
                        src="~/assets/img/user.png"
                        width="32"
                      />
                    </div>
                    <div>
                      <div class="flex items-center mb-4 mt-1">
                        <input
                          id="disabled-radio-1"
                          type="radio"
                          value=""
                          name="disabled-radio"
                          class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg- dark:border-gray-600 checked:bg-black"
                        />
                        <label
                          for="disabled-radio-1"
                          class="w-full ml-2 text-[16px] text-[#12131F] font-medium border-b border-[#CFD8DC] text-right"
                          >Susan Singh</label
                        >
                      </div>
                      <p class="ml-[23px] text-center">
                        susan.smith@gmail.com| +1956523586 | Cambridge,MA 02139,
                        United States
                      </p>
                    </div>
                    <div class="mt-[30px] flex gap-4">
                      <button
                        class="bg-[#ECEFF1] text-black font-medium px-[28px] py-[10px] rounded-full w-[165px]"
                      >
                        Cancel
                      </button>
                      <button
                        class="bg-[#12131F] text-white font-medium px-[28px] py-[10px] rounded-full w-[165px]"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const isModalVisible = ref(true);

const onToggle = () => {
  isModalVisible.value = !isModalVisible.value;
};
</script>
