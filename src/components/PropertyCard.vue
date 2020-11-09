<template>
  <div>
    <div class="relative pb-5/6">
      <img
        class="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
        :src="property.imageUrl"
        alt=""
      />
    </div>
    <div class="relative px-4 -mt-16">
      <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
        <div class="flex items-baseline">
          <span
            class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs"
            >Plus</span
          >
          <div
            class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide"
          >
            {{ property.beds }}
            {{ property.beds === 1 ? 'bed' : 'beds' }} &bull;
            {{ property.baths }} {{ property.baths === 1 ? 'bath' : 'baths' }}
          </div>
        </div>
        <h4 class="mt-1 text-gray-900 font-semibold text-lg">
          {{ property.title }}
        </h4>
        <div class="mt-1">
          <span class="text-gray-900">{{ formattedPrice }}</span
          ><span class="ml-1 text-sm text-gray-600">/wk</span>
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-600">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-4 h-4"
            :class="property.rating >= i ? 'text-teal-500' : 'text-gray-400'"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
          <span class="ml-2"> {{ property.reviewCount }} reviews </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['property'],
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      return formatter.format(this.property.price / 100);
    }
  }
};
</script>
