<script setup>
import LocaleText from "@/components/text/localeText.vue";
import {onMounted, reactive, ref, useTemplateRef, watch} from "vue";
import {WireguardConfigurationsStore} from "@/stores/WireguardConfigurationsStore.js";
import {fetchPost} from "@/utilities/fetch.js";
import {DashboardConfigurationStore} from "@/stores/DashboardConfigurationStore.js";
import UpdateConfigurationName
	from "@/components/configurationComponents/editConfigurationComponents/updateConfigurationName.vue";
const props = defineProps({
	configurationInfo: Object
})
const wgStore = WireguardConfigurationsStore()
const store = DashboardConfigurationStore()
const saving = ref(false)
const data = reactive(JSON.parse(JSON.stringify(props.configurationInfo)))
const editPrivateKey = ref(false)
const dataChanged = ref(false)
const confirmChanges = ref(false)
const reqField = reactive({
	PrivateKey: true,
	IPAddress: true,
	ListenPort: true
})
const editConfigurationContainer = useTemplateRef("editConfigurationContainer")
const genKey = () => {
	if (wgStore.checkWGKeyLength(data.PrivateKey)){
		reqField.PrivateKey = true;
		data.PublicKey = window.wireguard.generatePublicKey(data.PrivateKey)
	}else{
		reqField.PrivateKey = false;
	}
}
const resetForm = () => {
	dataChanged.value = false;
	Object.assign(data, JSON.parse(JSON.stringify(props.configurationInfo)))
}
const emit = defineEmits(["changed", "close"])
const saveForm = ()  => {
	saving.value = true
	fetchPost("/api/updateWireguardConfiguration", data, (res) => {
		saving.value = false
		if (res.status){
			store.newMessage("Server", "Configuration saved", "success")
			dataChanged.value = false
			emit("dataChanged", res.data)
			
		}else{
			store.newMessage("Server", res.message, "danger")
		}
	})
}
const updateConfigurationName = ref(false)

watch(data, () => {
	dataChanged.value = JSON.stringify(data) !== JSON.stringify(props.configurationInfo);
}, {
	deep: true
})
</script>

<template>
	<div class="peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll" ref="editConfigurationContainer">
		<div class="container d-flex h-100 w-100">
			<div class="m-auto modal-dialog-centered dashboardModal" style="width: 700px">
				<div class="card rounded-3 shadow flex-grow-1">
					<div class="card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4">
						<h4 class="mb-0">
							<LocaleText t="Configuration Settings"></LocaleText>
						</h4>
						<button type="button" class="btn-close ms-auto" @click="$emit('close')"></button>
					</div>
					<div class="card-body px-4 pb-4">
						<div class="d-flex gap-2 flex-column">
							<div class="d-flex align-items-center gap-3" v-if="!updateConfigurationName">
								<small class="text-muted">
									<LocaleText t="Name"></LocaleText>
								</small>
								<small>{{data.Name}}</small>
								<button 
									@click="updateConfigurationName = true"
									class="btn btn-sm bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 ms-auto">
									Update Name
								</button>
							</div>
							<UpdateConfigurationName
								@close="updateConfigurationName = false"
								:configuration-name="data.Name"
								v-if="updateConfigurationName"></UpdateConfigurationName>
							
							<template v-else>
								<hr>
								<div class="d-flex align-items-center gap-3">
									<small class="text-muted" style="word-break: keep-all">
										<LocaleText t="Public Key"></LocaleText>
									</small>
									<small class="ms-auto"  style="word-break: break-all">
										{{data.PublicKey}}
									</small>
								</div>
								<hr>
								<div>
									<div class="d-flex">
										<label for="configuration_private_key" class="form-label">
											<small class="text-muted d-block">
												<LocaleText t="Private Key"></LocaleText>
											</small>
										</label>
										<div class="form-check form-switch ms-auto">
											<input class="form-check-input"
											       type="checkbox" role="switch" id="editPrivateKeySwitch"
											       v-model="editPrivateKey"
											>
											<label class="form-check-label" for="editPrivateKeySwitch">
												<small>Edit</small>
											</label>
										</div>
									</div>
									<input type="text" class="form-control form-control-sm rounded-3"
									       :disabled="saving || !editPrivateKey"
									       :class="{'is-invalid': !reqField.PrivateKey}"
									       @keyup="genKey()"
									       v-model="data.PrivateKey"
									       id="configuration_private_key">
								</div>
								<div>
									<label for="configuration_ipaddress_cidr" class="form-label">
										<small class="text-muted">
											<LocaleText t="IP Address/CIDR"></LocaleText>
										</small>
									</label>
									<input type="text" class="form-control form-control-sm rounded-3"
									       :disabled="saving"
									       v-model="data.Address"
									       id="configuration_ipaddress_cidr">
								</div>
								<div>
									<label for="configuration_listen_port" class="form-label">
										<small class="text-muted">
											<LocaleText t="Listen Port"></LocaleText>
										</small>
									</label>
									<input type="number" class="form-control form-control-sm rounded-3"
									       :disabled="saving"
									       v-model="data.ListenPort"
									       id="configuration_listen_port">

								</div>
								<div>
									<label for="configuration_preup" class="form-label">
										<small class="text-muted">
											<LocaleText t="PreUp"></LocaleText>
										</small>
									</label>
									<input type="text" class="form-control form-control-sm rounded-3"
									       :disabled="saving"
									       v-model="data.PreUp"
									       id="configuration_preup">
								</div>
								<div>
									<label for="configuration_predown" class="form-label">
										<small class="text-muted">
											<LocaleText t="PreDown"></LocaleText>
										</small>
									</label>
									<input type="text" class="form-control form-control-sm rounded-3"
									       :disabled="saving"
									       v-model="data.PreDown"
									       id="configuration_predown">
								</div>
								<div>
									<label for="configuration_postup" class="form-label">
										<small class="text-muted">
											<LocaleText t="PostUp"></LocaleText>
										</small>
									</label>
									<input type="text" class="form-control form-control-sm rounded-3"
									       :disabled="saving"
									       v-model="data.PostUp"
									       id="configuration_postup">
								</div>
								<div>
									<label for="configuration_postdown" class="form-label">
										<small class="text-muted">
											<LocaleText t="PostDown"></LocaleText>
										</small>
									</label>
									<input type="text" class="form-control form-control-sm rounded-3"
									       :disabled="saving"
									       v-model="data.PostDown"
									       id="configuration_postdown">
								</div>
								<div class="d-flex align-items-center gap-2 mt-4">
									<button class="btn bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3 shadow ms-auto"
									        @click="resetForm()"
									        :disabled="!dataChanged || saving">
										<i class="bi bi-arrow-clockwise"></i>
									</button>
									<button class="btn bg-primary-subtle border-primary-subtle text-primary-emphasis rounded-3 shadow"
									        :disabled="!dataChanged || saving"
									        @click="saveForm()"
									>
										<i class="bi bi-save-fill"></i></button>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>