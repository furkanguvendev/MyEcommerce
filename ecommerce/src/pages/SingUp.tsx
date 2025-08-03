import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { Roles } from '../types&enums/enums'
import { NavBar } from '../components/NavBar'
import { FooterSection } from '../layouts/FooterSection'
import { useState } from 'react'

const roleOptions = Object.entries(Roles).map(([label, value]) => ({
  label,
  value,
}))

type FormInputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
  role_id: number
  store?: {
    name: string
    phone: string
    tax_no: string
    bank_account: string
  }
}

type Payload = Omit<FormInputs, 'confirmPassword'>

export const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      role_id: Roles.Customer,
    },
  })

  const [formMessage, setFormMessage] = useState<string | null>(null)
  const selectedRole = watch('role_id')
  const passwordValue = watch('password')

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data
    const payload: Payload = rest

    setFormMessage(
      `🚫 Şu anda yeni kayıt işlemleri devre dışıdır. Kayıt olamazsınız.\n\n` +
      `Test amacıyla aşağıdaki hesaplarla giriş yapabilirsiniz (şifre: 123456):\n` +
      `• customer@commerce.com\n` +
      `• store@commerce.com\n` +
      `• admin@commerce.com\n\n` +
      `📦 Girdiğiniz Bilgiler:\n` +
      `📧 E-mail: ${payload.email}\n` +
      `👤 İsim: ${payload.name}`
    )
  }

  return (
    <div className="flex flex-col min-h-screen font-montserrat bg-gray-100">
      <NavBar />

      <div
        className={`flex w-full max-w-6xl mx-auto mt-8 mb-8 px-4 gap-6 
          ${formMessage ? 'flex-col lg:flex-row' : 'flex-col items-center'}`}
      >
        {/* Form Kartı */}
        <form
          className={`bg-white shadow-lg rounded-lg p-6 
            ${formMessage ? 'flex-1' : 'max-w-lg w-full'}`}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Kayıt Ol</h2>

          {/* Ad */}
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="font-semibold mb-1">Adınız</label>
            <input
              id="name"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('name', {
                required: 'İsim zorunludur',
                minLength: { value: 3, message: 'İsim en az 3 karakter olmalıdır' },
              })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-semibold mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('email', {
                required: 'Email zorunludur',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Geçerli bir email adresi giriniz',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Şifre */}
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="font-semibold mb-1">Şifre</label>
            <input
              id="password"
              type="password"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('password', {
                required: 'Şifre zorunludur',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message: 'Şifre en az 8 karakter, büyük/küçük harf, sayı ve özel karakter içermelidir',
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Şifre Tekrar */}
          <div className="flex flex-col mb-4">
            <label htmlFor="confirmPassword" className="font-semibold mb-1">Şifre Tekrar</label>
            <input
              id="confirmPassword"
              type="password"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('confirmPassword', {
                required: 'Şifre tekrar zorunludur',
                validate: (value) => value === passwordValue || 'Şifreler eşleşmiyor',
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Rol Seçimi */}
          <div className="flex flex-col mb-4">
            <label htmlFor="role_id" className="font-semibold mb-1">Rol</label>
            <select
              id="role_id"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('role_id', { valueAsNumber: true, required: true })}
            >
              {roleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {errors.role_id && <p className="text-red-500 text-sm">Rol seçimi zorunludur</p>}
          </div>

          {/* Store Alanları */}
          {selectedRole === Roles.Store && (
            <>
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Mağaza Adı</label>
                <input
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Mağaza Adı"
                  {...register('store.name', {
                    required: 'Mağaza adı zorunludur',
                    minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' },
                  })}
                />
                {errors.store?.name && <p className="text-red-500 text-sm">{errors.store.name.message}</p>}
              </div>

              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Telefon</label>
                <input
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Telefon"
                  {...register('store.phone', {
                    required: 'Telefon zorunludur',
                    pattern: { value: /^(\+90|0)?5\d{9}$/, message: 'Geçerli bir Türkiye telefon numarası giriniz' },
                  })}
                />
                {errors.store?.phone && <p className="text-red-500 text-sm">{errors.store.phone.message}</p>}
              </div>

              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Vergi No</label>
                <input
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Vergi No"
                  {...register('store.tax_no', {
                    required: 'Vergi no zorunludur',
                    pattern: { value: /^T\d{4}V\d{6}$/, message: 'Vergi no “TXXXXVXXXXXX” formatında olmalıdır' },
                  })}
                />
                {errors.store?.tax_no && <p className="text-red-500 text-sm">{errors.store.tax_no.message}</p>}
              </div>

              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">IBAN</label>
                <input
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="IBAN"
                  {...register('store.bank_account', {
                    required: 'IBAN zorunludur',
                    pattern: { value: /^TR\d{2}\d{5}\d{16}$/, message: 'Geçerli bir Türkiye IBAN numarası giriniz' },
                  })}
                />
                {errors.store?.bank_account && <p className="text-red-500 text-sm">{errors.store.bank_account.message}</p>}
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Kaydol
          </button>
        </form>

        {/* Uyarı Kutusu */}
        {formMessage && (
          <div className="flex-1">
            <pre className="bg-yellow-50 border border-yellow-400 text-yellow-900 p-6 rounded-lg shadow-md w-full h-full whitespace-pre-wrap">
              {formMessage}
            </pre>
          </div>
        )}
      </div>

      <FooterSection />
    </div>
  )
}
