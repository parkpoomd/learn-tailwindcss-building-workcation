<template>
  <section class="bg-gray-800">
    <div class="flex justify-between px-4 py-3">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
          type="text"
          placeholder="Serch by keywords"
        />
      </div>
      <button
        @click="toggle"
        type="button"
        class="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4"
        :class="{ 'bg-gray-600': isOpen, 'bg-gray-700': !isOpen }"
      >
        <svg
          class="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          ></path></svg
        ><span class="ml-1 text-white font-medium">
          Filters
        </span>
      </button>
    </div>
    <form v-show="isOpen">
      <fieldset class="px-4 py-4 border-t border-gray-900 sm:flex sm:-mx-2">
        <div class="flex -mx-2 sm:w-1/2 sm:mx-0">
          <label class="block w-1/2 px-2">
            <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
            <select
              class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600"
            >
              <option>4</option>
            </select>
          </label>
          <label class="block w-1/2 px-2">
            <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
            <select
              class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600"
            >
              <option>2</option>
            </select>
          </label>
        </div>
        <div class="mt-4 sm:w-1/2 sm:mt-0 sm:px-2">
          <label>
            <span class="text-sm font-semibold text-gray-500">Price Range</span>
            <select
              class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600"
            >
              <option>Up to $2,000/wk</option>
            </select>
          </label>
        </div>
      </fieldset>
      <fieldset class="px-4 py-4 border-t border-gray-900">
        <span class="block text-sm font-semibold text-gray-500"
          >Property Type</span
        >
        <div class="sm:flex sm:-mx-2">
          <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center">
            <input
              class="form-radio bg-gray-900"
              type="radio"
              name="propertyType"
              value="house"
            />
            <span class="ml-2 text-white">
              House
            </span>
          </label>
          <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center">
            <input
              class="form-radio bg-gray-900"
              type="radio"
              name="propertyType"
              value="apartment"
            />
            <span class="ml-2 text-white">
              Apartment
            </span>
          </label>
          <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center">
            <input
              class="form-radio bg-gray-900"
              type="radio"
              name="propertyType"
              value="loft"
            />
            <span class="ml-2 text-white">
              Loft
            </span>
          </label>
          <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center">
            <input
              class="form-radio bg-gray-900"
              type="radio"
              name="propertyType"
              value="townhouse"
            />
            <span class="ml-2 text-white">
              Townhouse
            </span>
          </label>
        </div>
      </fieldset>
      <fieldset class="px-4 py-4 border-t border-gray-900">
        <span class="block text-sm font-semibold text-gray-500">Amenities</span>
        <div class="sm:flex sm:-mx-2 sm:flex-wrap">
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="balcony"
            />
            <span class="ml-2 text-white">
              Balcony
            </span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="poor"
            />
            <span class="ml-2 text-white">
              Poor
            </span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="bearch"
            />
            <span class="ml-2 text-white">
              Bearch
            </span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="petFriendly"
            />
            <span class="ml-2 text-white">
              Pet friendly
            </span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="kidFriendly"
            />
            <span class="ml-2 text-white">
              Kid friendly
            </span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/4 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="parking"
            />
            <span class="ml-2 text-white">
              Parking
            </span>
          </label>
          <label class="mt-3 flex items-center sm:w-1/2 sm:px-2">
            <input
              class="form-checkbox bg-gray-900"
              type="checkbox"
              name="airConditioning"
            />
            <span class="ml-2 text-white">
              Air conditioning
            </span>
          </label>
        </div>
      </fieldset>
      <div class="bg-gray-900 px-4 py-4 sm:text-right">
        <button
          class="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg"
        >
          Update results
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
