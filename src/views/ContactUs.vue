<script lang="ts" setup>
import "/src/index.css"
</script>

<template>
    <section>
        <div class="contact-wrapper">
            <h2>Contact Us</h2>
            <p>Got a technical issue? Want to send
                feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="contact-form-label ">Your email</label>
                    <input type="email" id="email" class="contact-form-input" placeholder="name@flowbite.com" required>
                </div>
                <div>
                    <label for="subject" class="contact-form-label">Subject</label>
                    <input type="text" id="subject" class="contact-form-input" placeholder="Let us know how we can help you"
                        required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="contact-form-label ">Your message</label>
                    <textarea id="message" rows="6" class="contact-form-input" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit"
                    class="contact-form-btn">Send
                    message</button>
            </form>
        </div>
    </section>
</template>
